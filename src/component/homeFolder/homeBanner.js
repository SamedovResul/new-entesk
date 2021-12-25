import  {React, } from 'react'
import { animated} from 'react-spring'
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
import HomeFunctions from '../functions/homeFunctions'
import allData from '../../course'

const HomeBanner = (props) =>{
	let location = props.location.aboutProps
	
	// home functions 
	const {
	myRef,
	handlerSide,
	container,
	bannerStyleText,
	bannerStyleLogo,
	leafimg,
	brushimg,
	circleimg
} = HomeFunctions({location})

	// data for site
	const {blog, Course, Home, Sectionone, Sectionthree, images, Client} = allData
	let data 
	Course.map((subject) =>{
		return data = subject
	})


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
				<SectionSeven  myRef={myRef} />
				<FooterSection data={Course} />
			</div>
		</article>
	)
}


export default HomeBanner
