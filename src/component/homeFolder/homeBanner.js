import  {React, useEffect, useState } from 'react'
import {useSpring, animated} from 'react-spring'
import { Link} from 'react-router-dom'
import SectionOne from './sectionOne'
import circle from '../../images/circle.png'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import mainLogo from '../../images/mainLogo.png'
import ets from '../../images/ets.png'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'
import SectionFive from './sectionFive'
import SectionSix from './sectionSix'
import SectionSeven from './sectionSeven'
import FooterSection from './footerSection'

import allData from '../../course'


const HomeBanner = (props) =>{
	// let state = useSelector(state => state.allData)

	const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

	const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

	useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])



	// console.log(state)
	let location = props.location.aboutProps
	const [openSide, setopenSide ] = useState(false);
	const { innerWidth: width} = window;
	
	const {blog, Course, Home, Sectionone, Sectionthree, images, Client} = allData
	let data 
	Course.map((subject) =>{
		return data = subject
	})

	useEffect(() => {
	location ? location.name === "toAbout" ?
	window.scrollTo(0, 3500) : 
	location.name === "fromKSM" ?
	window.scrollTo(0, 3500) : 
	location.name === "fromproducts" ? 
	window.scrollTo(0, 3500) :
	window.scrollTo(0, 0):
	window.scrollTo(0, 0)
	}, [location] );


	
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
			const position = window.pageYOffset;
			setScrollPosition(position);
	};
	window.addEventListener('scroll', handleScroll)

	useEffect(() => {
		scrollPosition >= 5 ? setopenSide(true) : setopenSide(false)  
	}, [scrollPosition])


	const handlerSide = function(){
		if(openSide === false){
			setopenSide(true)
		}else{
			setopenSide(false)
		}
	}
	

// container height animation------------------

	const container = useSpring({
		to: [{height: screenSize.dynamicWidth <= 2300 && screenSize.dynamicWidth >= 1800 ?
				"900px"	:	screenSize.dynamicWidth <= 1800 && screenSize.dynamicWidth >= 1400 ?
			 	"700px" : screenSize.dynamicWidth <= 991 && screenSize.dynamicWidth >= 768 ?
			  "500px" : screenSize.dynamicWidth >= 390 && screenSize.dynamicWidth <= 768 ? 
				"300px" : screenSize.dynamicWidth <= 390 ? "240px" : "550px"  ,

				zIndex: location? openSide? -5 : 0 : openSide? 0 : -5
				}],
		from: {
			height: screenSize.dynamicWidth === 767 ?
			location ? "400px" :'550px':
			location ? "400px" :'550px',
			
				
			}
	})

// banner text animation -------------------------


	const bannerStyleText = useSpring({
		to: [{
			top: width >= 1800 && width <= 2300 ? location ?
			openSide? '44.5rem' : '8rem' : 
			openSide? '8rem' : '44.5rem' :
			width >= 1400 && width <= 1800 ? location ?
			openSide? '32.5rem' : '8rem' : 
			openSide? '8rem' : '32.5rem' :
			width <= 991 && width >= 769 ? location ?
			openSide? '22rem' : '4.4rem' : 
			openSide? '4.4rem' : '22rem' :
			width <= 769 &&  width >= 600 ? 
			location ?
			openSide? '13.8rem' : '4rem' :
			openSide? '4rem' : '13.8rem': 
			width <= 600 &&  width >= 450 ?  location ?
			openSide? '14.5rem' : '4rem' : 
			openSide? '4rem' : '14.5rem' :
			width <= 450 && width >= 390 ? location ? 
			openSide? '14rem' : '3.7rem' : 
			openSide? '3.7rem' : '14rem' :
			width <= 390 ? location ? 
			openSide? '10.8rem' : '3.6rem' : 
			openSide? '3.6rem' : '10.8rem' :
			location ? 
			openSide? '26.5rem' : '5.8rem' : 
			openSide? '5.8rem' : '26.5rem' ,

			fontSize: width >= 1400 && width <= 1800 ?
			location ? 
			openSide? '2.1vw' : '1.1vw' :
			openSide? '1.1vw' : '2.1vw':
			width <= 991 && width >= 769 ? 
			location ? 
			openSide? '2.1vw' : '1.5vw' :
			openSide? '1.5vw' : '2.1vw': 
			width <= 768 &&  width >= 600 ? 
			location ?
			openSide? '2.4vw' : '1.4vw' :
			openSide? '1.4vw' : '2.4vw': 
			width <= 600 && width >= 450 ? 
			location ? 
			openSide? '2.7vw' : '2.1vw':
			openSide? '2.1vw' : '2.7vw':
			width <= 450 ?
			location ? 
			openSide? '3.1vw' : '2.2vw':
			openSide? '2.2vw' : '3.1vw':
			location ? 
			openSide? '2.1vw' : '1.1vw':
			openSide? '1.1vw' : '2.1vw'  ,

		}],
		from: {top: '30rem'},
		config: {
			duration: 500
		}
	})

// banner style animation------------------------------

	const bannerStyleLogo = useSpring({
		to: [{top: width <= 991 && width >= 768 ? location?
				openSide? '8%' : '-25%' : 
				openSide? '-25%' : '8%' :
				width <= 768 &&  width >= 390 ?
				location?
				openSide? '0%' : '-25%' : 
				openSide? '-25%' : '0%' :
				width <= 390 ? location?
				openSide? '0%' : '-20%' : 
				openSide? '-20%' : '0%' :
				location?
				openSide? '0%' : '-31%' : 
				openSide? '-31%' : '0%' ,


				paddingTop: location? openSide? '20px' : '0px': openSide? '0px' : '20px' ,
	}],
		from: {top: location? '-60%' : '0%'},
		config: {
			duration: 500
		}
	})

// leaf img animation----------------------------------

	const leafimg = useSpring({
		to: [{left: width <= 767 && width >= 600 ?
					location? 
					openSide? '37%' : '30%' : openSide? '30%' : '37%': 
				 	width <= 600 && width >= 430 ? location? 
					openSide? '36%' : '30%' : openSide? '30%' : '36%':
					width <= 430 ? 
					location? 
					openSide? '33%' : '30%' : openSide? '30%' : '33%':
					location? 
					openSide? '39%' : '30%' : openSide? '30%' : '39%',

			
				top: width <= 991 && width >= 768 ? location? 
				openSide ? '55%' : '24%' : 
				openSide ? '24%' : '55%' :
				width >= 400 && width <= 767 ?  location ?
				openSide ? '51%' : '35%' : 
				openSide ? '35%' : '51%' :
				width <= 400 ? location ? 
				openSide ? '50%' : '35%' : 
				openSide ? '35%' : '50%' :
				location ?
				openSide ? '55%' : '30%' : 
				openSide ? '30%' : '55%' ,


				width: width <= 700 && width >= 600?  
				location? 
				openSide ? '10%': '15%' : openSide ? '15%' : '10%' :
				width <= 600 && width >= 430?
				location? 
				openSide ? '12%': '15%' : openSide ? '15%' : '12%':
				width <= 429 ? 
				location?
				openSide ? '13%': '15%' : openSide ? '15%' : '13%':
				location ?
				openSide ? '8%': '15%' : openSide ? '15%' : '8%'

		
		
		}],
  	from: {left: location? 
			location.name === 'fromNavication' ? 
			'30%' : location.name === 'fromTechnology' ?
			'0%' : location.name ==="fromEnvironment" ?  
			"50%" : location.name === 'fromSkill'? 
			'0%' : '30%' : '30%',


			top: location? location.name === 'fromNavication' ? 
			"-50%" : location.name === 'fromEnvironment' ? 
			'-15%' : '30%' :  '30%',
			width: '15%'
		},
			config: {
				duration: 500
			}
		})

// brush img animation --------------------

	const brushimg = useSpring({
		to: [{
			left: width <= 767 && width >= 600 ?
				location? 
				openSide? '63%' : '70%' : openSide? '70%' : '63%':
				width <= 600 && width >= 430 ?
				location? 
				openSide? '64%' : '70%' : openSide? '70%' : '64%':
				width <= 430?
				location? 
				openSide? '67%' : '70%' : openSide? '70%' : '67%':
				location?
				openSide? '61%' : '70%' : openSide? '70%' : '61%',

			
			top: width <= 991 && width >= 768 ? location? 
			openSide ? '55%' : '24%' : 
			openSide ? '24%' : '55%' :
			width >= 400 && width <= 767 ?  location ?
			openSide ? '51%' : '35%' : 
			openSide ? '35%' : '51%' :
			width <= 400 ? location ? 
			openSide ? '50%' : '35%' : 
			openSide ? '35%' : '50%' :
			location ?
			openSide ? '55%' : '30%' : 
			openSide ? '30%' : '55%' ,

			width: width <= 700 && width >= 600?  
			location? 
			openSide ? '10%': '15%' : openSide ? '15%' : '10%' :
			width <= 600 && width >= 430?
			location? 
			openSide ? '12%': '15%' : openSide ? '15%' : '12%':
			width <= 429 ? 
			location?
			openSide ? '13%': '15%' : openSide ? '15%' : '13%':
			location ?
			openSide ? '8%': '15%' : openSide ? '15%' : '8%'
		}],
			from: {left: location? 	
			location.name === 'fromNavication' ?
			'70%' : location.name === 'fromEnvironment'?
			'100%' : location.name === 'fromTechnology' ? 
			'100%' : location.name === 'fromSkill'? 
			'50%' : '70%' : '70%',


			top: location? location.name === 'fromNavication' ? 
					"-50%" : location.name === 'fromSkill' ? 
					'-15%' : '30%' :  '30%',
					width: '15%'
				},
			config: {
				duration: 500
			}
		})

//  circle img animation -----------------------

	const circleimg = useSpring({
		to: [{
			left: '50%',

		top: width <= 991 && width >= 768 ? location? 
		openSide ? '55%' : '24%' : 
		openSide ? '24%' : '55%' :
		width >= 400 && width <= 767 ?  location ?
		openSide ? '51%' : '35%' : 
		openSide ? '35%' : '51%' :
		width <= 400 ? location ? 
		openSide ? '50%' : '35%' : 
		openSide ? '35%' : '50%' :
		location ?
		openSide ? '55%' : '30%' : 
		openSide ? '30%' : '55%' ,


		width: width <= 700 && width >= 600?  
		location? 
		openSide ? '10%': '15%' : openSide ? '15%' : '10%' :
		width <= 600 && width >= 430?
		location? 
		openSide ? '12%': '15%' : openSide ? '15%' : '12%':
		width <= 429 ? 
		location?
		openSide ? '13%': '15%' : openSide ? '15%' : '13%':
		location ?
		openSide ? '8%': '15%' : openSide ? '15%' : '8%'
			}],
			from: {left: location? 
			location.name === 'fromNavication' ?
			'50%' : location.name === 'fromTechnology' ?
			'50%' :  location.name === 'fromEnvironment'? 
			'0%' : location.name === 'fromSkill'? 
			'100%' : '50%' :  '50%',


			top: location? location.name === 'fromNavication' ? 
				"-50%" : location.name === 'fromTechnology' ? 
				'-15%' : '30%' :  '30%',
				width: '15%'
			},
			config: {
				duration: 500
			}
		})


	//  banner text img animatios
	
	return(
		<article  onClick={props.handlerSideClose}  >
			<div style={{position: 'relative', zIndex: `${props.zIndex}`}}>
				<div className="click-div" onClick={handlerSide} >
				
					<animated.div style={container}  className='main-banner'>
						<div className='banner-container' >
							
						<animated.div style={bannerStyleLogo} className="banner-style-logo">
							<img className="logo-img" src={mainLogo} alt="logo" ></img>
							<div className="logo-text">
								<img src={ets} className="text-img"  alt="logo"></img>
							</div>
						</animated.div>
							
							<animated.div style={bannerStyleText} className="banner-style-text" >
								<p>Environment</p>
								<p>Technology</p>
								<p>Skills</p>
							</animated.div>

								<Link  className='link ' to='/environment'>
									<animated.img  src={ leaf} alt='img'  style={leafimg} className=''></animated.img>
								</Link >

								<Link className='link ' to='/technology'>
									<animated.img src={ circle} alt='img' className='centerimg'style={circleimg} ></animated.img>
								</Link>

								<Link className='link ' to='/skill'>
									<animated.img src={brush} alt='img' style={brushimg} ></animated.img>
								</Link>
								
							
						</div>
					</animated.div>
				</div>
				<SectionOne data={Sectionone} />
				<SectionTwo data={Course} setCourse={props.setCourse} />
				<SectionThree data={Sectionthree} blog={blog}/>
				<SectionFour data={images}  />
				<SectionFive data={blog} />
				<SectionSix data={Client} />
				<SectionSeven  />
				<FooterSection data={Course} />
			</div>
		</article>
	)
}


export default HomeBanner
