import {React,  useState,useEffect, useCallback } from 'react'
import {useSpring, animated} from 'react-spring'
import circle from '../../images/circle.png'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import { Link,useLocation,useParams } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { FaBars, FaStream } from 'react-icons/fa';
import logo from '../../images/logoicon.png'
import GetDimension from '../functions/getDimension'
import { studentData } from '../studentsCV/studentData'
import { InvitationsData } from '../studentInvitations/invitationsData'


const NavBar = ( {setZindex,setopenSide,openSide}) =>{
	const { name } = useParams();
	
	const  {screenSize} = GetDimension()
	const [y, setY] = useState(window.scrollY);
	const [count, setCount] = useState(false);
	const [scroll, setScroll] =  useState();
	const { innerWidth: width} = window;
	const location = useLocation();
	
	const admin = false
	const sideAnimation = useSpring({
		to: [{
			right: screenSize.dynamicWidth < 1199 ? 
			openSide ?  "0%" : "-50%":
			openSide ?  "-20%" : "-50%"
		}],
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

	const enteskStyle = useSpring({
		to: [{top: window.scrollY > 200 && location.pathname === '/' ? '0px' : '100px'}],
		from: {top: location.pathname === '/'? '0px' : '100px'},
			config: {
				duration: location.pathname === '/'? 600 : 600
			}
	})

	const burgerAnimation = useSpring({
		to: [{right: window.scrollY > 200 && location.pathname === '/' ? '0px' : '-100px'}],
		from: {right: location.pathname === '/'? '0px' : '-100px'},
			config: {
				duration: location.pathname === '/'? 500 : 500
			}
	})

	

	const navMenuAnimation = useSpring({
		to: [{bottom: window.scrollY > 200 && location.pathname === '/' ? '100px' : '0px'}],
		from: {bottom: location.pathname === '/'? '100px' : '0px'},
			config: {
				duration: location.pathname === '/'? 600 : 600
			}
	})





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

let style 

const studentname = name;


studentData.map((subject) =>{
	const  {studentName} = subject
	// console.log("/" + "/" + studentname)
	// console.log("/" + studentName )
	// console.log(location.pathname)
	
	if(location.pathname === `/${studentName}/certificates`){
		style = {
			display:"none"
		} 
	}

	if(location.pathname === "/" + studentName ){
		style = {
				display:"none"
			} 
	}

})

InvitationsData.map((subject) =>{
	const {studentName} = subject
	// console.log("/" + "/" + studentname)
	// console.log("/" + studentName )
	// console.log(location.pathname)
	
	if(location.pathname === `/${studentName}/certificates`){
		style = {
			display:"none"
		} 
	}

	if(location.pathname === "/" + studentName ){
		style = {
				display:"none"
			} 
	}

})
// console.log(style)
if(location.pathname === "/gallery"){
	style = {
		display:"none"
	}
}

	// style = {
	// 	display:"none"
	// } :
	// style = {
	// 	display:"block"
	// }
    

	return(
		<> 
			<article className="stick-class" style={style}>
				<Link to='/' >
					{/* <animated.img style={sideanimation} onClick={handlerScroll}  className="logo-image" src={logo} alt="logo"></animated.img> */}
					<animated.svg style={sideanimation} onClick={handlerScroll} className="logo-image" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 808.91 808.91"><defs><style>{`.cls-1{fill:#55cbf9;}.cls-2{fill:#fbb116;}`}</style></defs><path id="Path_1" data-name="Path 1" className="cls-1" d="M500,892.45c-224.07,0-406.16-183.14-404.44-407.61,1.68-220,181.3-399.6,401.28-401.28C721.31,81.83,904.45,263.93,904.45,488h0a61.16,61.16,0,0,1-61.16,61.16H501.47c-33.17,0-61.41-25.78-62.59-58.93a61.16,61.16,0,0,1,58.89-63.35c.74,0,1.49,0,2.23,0H683.91c48.76,0,78.06-54.37,51-94.94a282.1,282.1,0,0,0-237.45-126c-155.5,1.37-281.66,130.47-279.57,286C220,645.31,345.17,769.58,499,770.13c29.6.1,55.74,20.42,61.11,49.53A61.19,61.19,0,0,1,500,892.45Z" transform="translate(-95.55 -83.55)"/><path id="Path_2" data-name="Path 2" className="cls-2" d="M904.45,488h0c0-204.26-152.2-373.61-349.14-400.66-195.57,27-347.64,195.16-349.2,397.5-1.51,196.93,138.48,362,324.15,399.59a61.21,61.21,0,0,0,29.83-64.77c-5.36-29.11-31.51-49.42-61.11-49.53-153.81-.55-279-124.82-281.08-278.28-2.09-155.5,124.06-284.59,279.57-286a282.72,282.72,0,0,1,57.89,5.48A281.67,281.67,0,0,1,845.47,331.89c27,40.58-2.25,94.94-51,94.94H610.55A61.17,61.17,0,0,0,549.39,488c0,.74,0,1.49,0,2.23,1.18,33.14,29.42,58.93,62.59,58.93H843.28A61.17,61.17,0,0,0,904.45,488Z" transform="translate(-95.55 -83.55)"/></animated.svg>
				</Link>

				
				<div className='nav-main-menu'>
				{
					admin ? (
						<div className='nav-menu'>
							<ul className='ul-nav' >
								<li>
									<Link
										to={{ pathname: '/Students',}}>
										Students
									</Link >
								</li>
								<li>
									<Link
										to={{ pathname: '/Adminblogs',}}>
										blog
									</Link >
								</li>
							</ul>
							
							
						</div>
						):(
						<>
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
						
								<animated.div className="desktopBurger" style={burgerAnimation}>
									<button  className="main-burger" onClick={handlerSideOpen}>
										<FaBars />
									</button>
								</animated.div>
							
							<animated.div style={ navMenuAnimation } className='nav-menu'>

								<ul className='ul-nav'>
										<li >
											<Link lang="aze" to={{
														pathname:'/',
														aboutProps:{
															name: 'fromNavication'
														}
													}}>
														

													ana səhifə
											</Link>
										</li>

										<li>
											<Link to={{
												pathname: '/products',
												aboutProps:{
													name: 'fromNavication'
												}
											}}>
												tədris 	
											</Link>
										</li>

										<li>
											<Link to={{
												pathname: '/About',
												aboutProps:{
													name: ''
												}
												}}> 
												haqqımızda
											</Link>
										</li>

										<li>
											<Link to={{
														pathname:'/',
														aboutProps:{
															name: 'toAbout'
														}
													}}>
													əlaqə
											</Link>
										</li>
										
									</ul>
							</animated.div>

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
										əsas
								</Link>
							</li>
							<li>
								<Link to={{
									pathname: '/products',
									aboutProps:{
										name: 'fromNavication'
									}
								}}>
								tədris 
								</Link>
							
							</li>
							<li>
								<Link to={{
									pathname: '/About',
									aboutProps:{
										name: ''
									}
									}}> 
									haqqımızda
								</Link>
							</li>
							<li>
								<Link to={{
											pathname:'/',
											aboutProps:{
												name: 'toAbout'
											}
										}}>
										əlaqə
								</Link>
							</li>
						</ul>

					</animated.div>

						</>
						
					)
				}

					

					<MediaQuery maxDeviceWidth={1199}>
						<button className="main-burger" onClick={handlerSideOpen}>
						<FaBars />
						</button>
					</MediaQuery>

				</div>

			</article>
			<MediaQuery maxDeviceWidth={1199}  >
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
										əsas
								</Link>
							</li>
							<li>
								<Link to={{
									pathname: '/products',
									aboutProps:{
										name: 'fromNavication'
									}
								}}>
								tədris 
								</Link>
							
							</li>
							<li>
								<Link to={{
									pathname: '/About',
									aboutProps:{
										name: ''
									}
									}}> 
									haqqımızda
								</Link>
							</li>
							<li>
								<Link to={{
											pathname:'/',
											aboutProps:{
												name: 'toAbout'
											}
										}}>
										əlaqə
								</Link>
							</li>
						</ul>

					</animated.div>
			</MediaQuery>
		</>
	)
}

export default NavBar