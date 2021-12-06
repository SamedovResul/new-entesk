import {React,  useState,useEffect, useCallback } from 'react'
import {useSpring, animated} from 'react-spring'
import circle from '../../images/circle.png'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import { Link,useLocation } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { FaBars, FaStream } from 'react-icons/fa';
import logo from '../../images/logoicon.png'
const NavBar = ( {setZindex,setopenSide,openSide}) =>{
	// const [openSide, setopenSide ] = useState(false);
	const [y, setY] = useState(window.scrollY);
	const [count, setCount] = useState(false);
	const [scroll, setScroll] =  useState();
	const { innerWidth: width} = window;
	const location = useLocation();



	const sideAnimation = useSpring({
		to: [{right: openSide ? "0%" : "-50%"}],
		from: {right: openSide ? "-50%" : "-50%"},
	})

	const sideanimation = useSpring({
		to: [{
			left: location.pathname === '/'? 
			window.scrollY === 0 ? "-12%" : "1%" :"1%" }],
		from: {left:"-5%"},
		config: {
			duration: 500
		}
	})

	// location.pathname === '/'? window.scrollY === 0 ? 
	// 			"-12%" : "1%" : location.pathname === '/' ? "1%" : "-12%":
	// 			location? 
	// 			location.pathname === '/' ? "-12%" : "1%" : location.pathname === '/' ? "1%" : "-12%"
				


	const handlerScroll = () =>{
		window.scrollTo(0, 0)
	}

	const handlerSideOpen = function(){
    setZindex(-5)
		setopenSide(true)
	}

  const handlerSideClose= function(){
    setZindex(0)
		setopenSide(false)
	}

	useEffect(() => {
		setopenSide(false)
	}, [location,setopenSide])

	useEffect(() => {
		if(width <= 2300 && width >= 1800){
			setScroll(700)
		}else if(width <= 1800 && width >= 1400){
			setScroll(500)
		}else if(width <= 1400 && width >= 1199){
			setScroll(500)
		}else if(width <= 1199 && width >= 768){
			setScroll(400)
		}else if(width <= 768 && width >= 400){
			setScroll(200)
		}else if(width <= 400 && width >= 320){
			setScroll(200)
		}
	}, [width])
	
const handleNavigation = useCallback(
	
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY && scroll > y) {
			setCount(false)

      // console.log("scrolling up");
    } else if (y < window.scrollY && scroll < y  ) {
			 setCount(true) 
			 
      // console.log("scrolling down");
    }
    setY(window.scrollY);
  }, [y, scroll]

);

useEffect(() => {
  setY(window.scrollY);
  window.addEventListener("scroll", handleNavigation);

  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation,count,y]);

// console.log(count)



const enteskStyle = useSpring({
	to: [{top: window.scrollY > 200 && location.pathname === '/' ? '0px' : '100px'}],
	from: {top: location.pathname === '/'? '0px' : '100px'},
		config: {
			duration: location.pathname === '/'? 600 : 600
		}
})

    

	return(
		<> 
			<article className="stick-class">
				<Link to='/' >
					<animated.img style={sideanimation} onClick={handlerScroll}  className="logo-image" src={logo} alt="logo"></animated.img>
				</Link>

				
				<div className='nav-main-menu'>
					<animated.div className="entesk" style={enteskStyle} >
							<Link
							  to={{ pathname: '/environment',
										aboutId:{
											id: 'fromNav-environment'
										}
									}}>
								<img  src={ leaf} alt='img'  className=''></img>
							</Link >

							<Link  to={{ pathname: '/technology',
										aboutId:{
											id: 'fromNav-environment'
										}
									}}>
								<img src={ circle} alt='img' className='centerimg'  ></img>
							</Link>

							<Link to={{ pathname: '/skill',
										aboutId:{
											id: 'fromNav-skill'
										}
									}}>
								<img src={brush} alt='img'  ></img>
							</Link>
						</animated.div>
					<div className='nav-menu'>

						<ul className='ul-nav'>
					<li >
						<Link  to={{
									pathname:'/',
									aboutProps:{
										name: 'fromNavication'
									}
								}}>
									

								Ana Səhifə
						</Link>
					</li>
							

							<li>
								<Link to={{
									pathname: '/products',
									aboutProps:{
										name: 'fromNavication'
									}
								}}>
									Tədris Proqramları
								</Link>
								</li>
							<li>
								<Link to={{
									pathname: '/About',
									aboutProps:{
										name: ''
									}
									}}> 
									Haqqımızda
								</Link>
							</li>
							<li>
							
								<Link to={{
											pathname:'/',
											aboutProps:{
												name: 'toAbout'
											}
										}}>
										Əlaqə
								</Link>
							</li>
						</ul>
					</div>

					<MediaQuery maxDeviceWidth={1198}>
						<button className="main-burger" onClick={handlerSideOpen}>
						<FaBars />
						</button>
					</MediaQuery>

				</div>

			</article>
			<MediaQuery maxDeviceWidth={1198}  >
					<animated.div style={sideAnimation} className="sidebar">
						<button className="side-burger" onClick={handlerSideClose}>
							<FaStream />
						</button>

						<ul>
							<li>
								<Link to={{
											pathname:'/',
											aboutProps:{
												name: 'fromNavication'
											}
										}}>
										Əsas
								</Link>
							</li>
							<li>
								<Link to={{
									pathname: '/products',
									aboutProps:{
										name: 'fromNavication'
									}
								}}>
									Məhsullar
								</Link>
							
							</li>
							<li>
								<Link to={{
									pathname: '/About',
									aboutProps:{
										name: ''
									}
									}}> 
									Haqqımızda
								</Link>
							</li>
							<li>
								<Link to={{
											pathname:'/',
											aboutProps:{
												name: 'toAbout'
											}
										}}>
										Əlaqə
								</Link>
							</li>
						</ul>

					</animated.div>
			</MediaQuery>
		</>
	)
}

export default NavBar