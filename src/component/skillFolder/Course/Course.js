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

const Skill = (props) =>{
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

		// console.log(props)
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
	to: [{ 
	left:location ? location.name === 'fromEnvironment'? 
	'0%': '0%' : '0%' ,
	
	top: width <= 768 ? '37px' : '117px'
	 }],


	from: { left: location ?
		location.name === 'fromEnvironment'? 
		'50%' : '0%' : '25%',

	top: width <= 768 ? 
	location ? 
	location.name === 'fromEnvironment'? 
	'-50px' : '37px' : '37px'  :  location ?
	location.name === 'fromEnvironment'? 
	'-100px' : '117px' : locationId ?  
		locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
},
	config: {
		duration: 500
	}
	})

	// brush animation --------------
	
	const brushimg = useSpring({
	to: [{top: '5%', right: '50%' }],


	from: {
	top: locationId ? locationId.id === 'fromNav-skill'? '0%' : '0%' : 
	location ? location.name === name?  '0%' : '25%' : '25%' ,


	right: location ? location.name === 'fromEnvironment'?
	'0%' : location.name === name? '41%' : '-5%' : locationId ? locationId.id === 'fromNav-skill'? 
	'41%' : '0%'  : '23%' },

	
	config: {
		duration: 500
	}
	})

	// Gear animation --------------

	const gearimg= useSpring({
		to: [{ 
			right:location ? 
			location.name === 'fromEnvironment'? 
			'0%' : '0%': '0%',


			top: width <= 768 ?
			location ? location.name === 'fromEnvironment'? 
			'37px' : '37px' : '37px' : location ?
			location.name === 'fromEnvironment'? 
			'117px' : '117px' : '117px'
		}],
		from: { 
			right:  location ? 
			location.name === 'fromEnvironment' ? 
			'100%' : '50%' : '50%' ,



			top: width <= 768 ?
			location ? location.name === 'fromEnvironment'? 
			'37px' : '-97px' : '37px' : location ? 
			location.name === 'fromEnvironment'? 
			'117px' : '-117px' : locationId ?  
			locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
		 },
	config: {
		duration: 500
	}
	})



    
    return(
			<>
				<article className="skill-section">
				<Helmet>
					<title>Entesk</title>
					<link rel="icon" href={icon} />
        </Helmet>

						<animated.div className="skill-img3" style={brushimg} >
						

						<Link to={{
							pathname:'/',
							aboutProps:{
								name: 'fromSkill'
							}
						}}>
		
							<img className='brush-img' src={brush} alt='img' >
							</img>
		
						</Link>
							
		
		
						</animated.div>

					<animated.div className="skill-banner" style={container}>
						
					<animated.div className="skill-img1" style={leafimg}  >
							
						<Link
						to={{
							pathname:'/Environment',
							aboutProps:{
								name: 'fromSkill'
							}
						}}>
						
							<img    src={ leaf} alt='img' >
							</img>
							
						</Link>
						
					</animated.div>
					<h1>{name}</h1>
	

					<animated.div className="skill-img2" style={gearimg} >

						
					<Link to={{
						pathname:'/technology',
						aboutProps:{
							name: 'fromSkill'
						}
					}}>

							<img  src={ circle} alt='img' >
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

export default Skill