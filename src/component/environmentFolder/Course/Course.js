import {useSpring, animated} from 'react-spring'
import  {React, useEffect,useState } from 'react' 
import { Link} from 'react-router-dom'
import leaf from '../../../images/leaf.png'
import brush from '../../../images/brush.png'
import circle from '../../../images/circle.png'
import SectionOne from './sectionOne'
import SectionTwo from '../../homeFolder/sectionTwo'
import SectionThree from './sectionThree'
import FooterSection from '../../homeFolder/footerSection'
import { useParams } from 'react-router-dom'
import Alldata from '../../../course'

const Environment = (props) =>{

	// let state = useSelector(state => state.allData)
	const { name } = useParams();
	console.log(name)
	let location = props.location.aboutProps
	const locationId =  props.location.aboutId
	const { innerWidth: width} = window;
	let data 
	let Course = Alldata.Course

		Course.map((subject, index) => {
			if(subject.name === name ){
				data = subject
			}

			return data
		})

	useEffect(() => {
	window.scrollTo(0, 0);
	}, [name] );

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

	const container = useSpring({
		to: [{height: screenSize.dynamicWidth <= 768 && screenSize.dynamicWidth > 480 ? location?  
		'250px' : '300px' : width < 480 ? location?
		'200px' : '200px' :'400px' }],

		from: {height: screenSize.dynamicWidth <= 768 && screenSize.dynamicWidth > 480 ? location?  
		'250px' : '400px' : screenSize.dynamicWidth < 480 ? location? 
		'200px' : '400px' : location? '400px' : '550px'  }
	})


		// Leaf animation --------------
		// console.log(props)
		const leafimg = useSpring({
			to: [{top: '5%', left: '50%' }],


			from: {top: locationId ? locationId.id ? '0%' : '0%' :
			 location ? location.name === name ? '0%' : '25%' : '25%',


			left: location ? location.name === 'fromTechnology'?
			'0%' : location.name === name ? '41%' :  '0%' : locationId
			? locationId.id === 'fromNav-environment' ?
			'41%' : '0%' : '30%' },
			config: {
				duration: 500
			}
		})

		// Leafsize animation --------------


		// Gear animation --------------

		const gearimg = useSpring({
		to: [{
			left: '0%' ,
			
			top: width <= 768 ?  
			location ? '37px' : '37px' :  location ? 
			'97px' : '97px'
	
		}],


			from: {left: location ? 
			location.name === 'fromTechnology' ?
			'50%' : '100%' :  '50%', 
			
			top: width <= 768 ? location ?  
			location.name === 'fromTechnology' ?
			 '-37px' : '37px' : '37px' : location ?  
			 location.name === 'fromTechnology' ?
			'-117px' : '117px' :locationId ?  
				locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
			 },
			config: {
				duration: 500
			}
		})

		// Brush animation --------------
		
		const brushimg = useSpring({
		to: [{right: location ?
			location.name === 'fromTechnology' ?
			'0%' : '0%' : '0%',

			top: width <= 768 ? location ? 
			location.name === 'fromTechnology' ? 
			'37px' : '37px' : '37px'   :    location ? 
			location.name === 'fromTechnology' ?
			'117px' : '117px' : '117px'
		,	
		}],
  		from: {right: location ?
			location.name === 'fromTechnology' ?
			'0%' : '50%' : '30%',
			
			top: width <= 768 ? location ? 
			location.name === 'fromTechnology' ?  
			'37px' : '-37px' : '-80px'  :  location ? 
			location.name === 'fromTechnology' ? 
			'117px' : '-117px' : locationId ?  
				locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
			},
			config: {
				duration: 500
			}
		})


    return(

			<article onClick={props.handlerSideClose}>
				<div className="environment-section" style={{position: 'relative', zIndex: `${props.zIndex}`}} >

								<animated.div className="environment-img1" style={leafimg} >
									
									<Link to={{
										pathname:'/',
										aboutProps:{
											name: 'fromEnvironment'
										}
										}}>
										<img  className='leaf-img' src={leaf} alt='img' ></img>
									</Link>
									
								</animated.div>
					
						<animated.div className="environment-banner" style={container}>
							<h1>{name}</h1>
							<animated.div className="environment-img2"  style={gearimg}>

								<Link to={{
									pathname:'/technology',
									aboutProps:{
										name: 'fromEnvironment'
									}
								}}>
									<img  src={ circle} alt='img' >
									</img>
								</Link>
								
							</animated.div>
							<animated.div className="environment-img3" style={brushimg} >

							<Link to={{
									pathname:'/skill',
									aboutProps:{
										name: 'fromEnvironment'
									}
								}}>
								<img src={brush} alt='img' >
								</img>
							</Link>

							</animated.div>
						</animated.div>
					
					
				</div>
				<SectionOne data={data}  />
				<SectionTwo data={Course} />
				<SectionThree data={data} />
				<FooterSection data={Course} />
		</article>					

    )
}

export default Environment