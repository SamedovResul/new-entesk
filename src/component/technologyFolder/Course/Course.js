import {useSpring, animated} from 'react-spring'
import  {React, useEffect,useState } from 'react' 
import { Link} from 'react-router-dom'
import leaf from '../../../images/leaf.png'
import brush from '../../../images/brush.png'
import circle from '../../../images/circle.png'
import icon from '../../../images/logoicon.png'
import SectionOne from './sectionOne'
import SectionTwo from '../../homeFolder/sectionTwo'
import SectionThree from './sectionThree'
import FooterSection from '../../homeFolder/footerSection'
import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import Alldata from '../../../course'
import {Helmet} from "react-helmet";


const TecnologyBanner = (props) =>{


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

	useEffect(() => {
	window.scrollTo(0, 0);
	}, [name] );
    const container = useSpring({
			to: [{height: screenSize.dynamicWidth <= 768 && screenSize.dynamicWidth >= 480 ? location?  
			'250px' : '300px' : screenSize.dynamicWidth < 480 ? location?
			'200px' : '200px' :'400px' }],

  		from: {height: screenSize.dynamicWidth <= 768 && screenSize.dynamicWidth > 480 ? location?  
			'250px' : '400px' : screenSize.dynamicWidth < 480 ? location? 
			'200px' : '400px' : location? '400px' : '550px'  }
		})

		// Leaf animation --------------

		const leafimg = useSpring({
		to: [{left: '0%',


					top:  width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'37px' : '37px' : '37px' :location ? 
					location.name === 'fromEnvironment' ?
					'117px' : '117px' : '117px'
			 	}],


		from: {left: location ?
					location.name === 'fromEnvironment' ? 	'50%' : '0%' : '33%',


					top:  width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'-37px' : '37px' : '37px' : location ? 
					location.name === 'fromEnvironment' ?
					'-117px' : '117px' : locationId ?  
				locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
				},
		config: {
			duration: 500
		}
		})

		// Gear animation --------------


		// console.log( location.name === name)
		// console.log( name)
		const gearimg   = useSpring({ 
		to: [{top: '5%', 
					left: location ? 
					location.name === 'fromEnvironment' ? 
					'50%' : '50%' : '50%'
				}],
		from: {top: locationId ? 
				locationId.id === 'fromNav-technology'? 
				'-0%': '0%' : location? location.name === name ? '0%' : '25%' :  '25%' ,


					left: location ? 
					location.name === 'fromEnvironment' ? 
					'0%' : location.name === name ? '50%' : '100%' : '50%' 
				},
		config: {
			duration: 500
		}
		})

		


		// brush animation --------------

		const brushimg = useSpring({
		to: [{right: location ? 
					location.name === 'fromEnvironment' ? 
					'0%' : '0%' : '0%',

					top:  width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'-37px' : '37px' : '37px' :location ? 
					location.name === 'fromEnvironment' ?
					'117px' : '117px' : '117px'
				}],

		from: {right: location ? 
					location.name === 'fromEnvironment' ? 
					'0%' : '50%' : '30%' ,
				
					top: width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'37px' :  '-110px' : '37px' : location ? 
					location.name === 'fromEnvironment' ?
					'117px' : '-110px' : locationId ?  
					locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
					},
			config: {
				duration: 500,
			}
		})



    
    return(
			<>
				<article className="technology-section">
					<Helmet>
						<title>Entesk</title>
						<link rel="icon" href={icon} />
        	</Helmet>
					<animated.div className="technology-img2" style={ gearimg} >

						<Link to={{
							pathname:'/',
							aboutProps:{
								name: 'fromTechnology'
							}
							}}>
							<img className='gear-img' src={ circle} alt='img' >
							</img>
						</Link>

					</animated.div>

					<animated.div className="technology-banner" style={container}>
						<h1>{name}</h1>
						<animated.div className="technology-img1" style={ leafimg  } >
							
						<Link
						to={{
							pathname:'/Environment',
							aboutProps:{
								name: 'fromTechnology'
							}
						}}>
						
							<img    src={ leaf} alt='img' >
							</img>

						</Link>

						</animated.div>
						
						<animated.div className="technology-img3" style={brushimg} >

						<Link
						to={{
							pathname:'/skill',
							aboutProps:{
								name: 'fromTechnology'
							}
						}}>
							<img src={brush} alt='img' >
							</img>
						</Link>

						</animated.div>
					</animated.div>
				
				</article>
				<SectionOne data={data}  />
				<SectionTwo data={Course}/>
				<SectionThree data={data} />
				<FooterSection data={Course} />
			</>
    )
}

export default TecnologyBanner