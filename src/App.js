import {React, useState, useEffect} from 'react';
// import {useSpring} from 'react-spring'
// import 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Environment from './component/environmentFolder/environment'
import Technology from './component/technologyFolder/technology'
import NavBar from './component/NavFolder/Navigation'
import HomeBanner from './component/homeFolder/homeBanner'
import Skill from './component/skillFolder/skill'
import Products from './component/products/product'
import Blog from './component/blog/blog'
import About from './component/About/about'
// import Circular from './circular/circular';
import EnvironmentCourse from './component/environmentFolder/Course/Course'
import TexnologyCourse from './component/technologyFolder/Course/Course'
import SkillCours from './component/skillFolder/Course/Course'
import Login from './component/adminfolder/login/login';
// // import Admin from './component/adminfolder/admin/admin';
// import Teacher from './component/adminfolder/teacher/teacher';
// import Students from './component/adminfolder/studentsFolder/students'
// import Blogs from './component/adminfolder/blogfolder/blogs'
// import Createblog from './component/adminfolder/blogfolder/Createblog'
import { useDispatch } from 'react-redux';
import {getUser} from './reducer/blogReducer/action'
import Cv from './component/studentsCV/CV'
import Gallery from './component/studentsCV/studentsCertificate/gallery';
// import Create from './component/adminfolder/admin/create/create';

function App(props) {
  const [certificates, setCertificates] = useState([])
  console.log(certificates)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  const [zIndex, setZindex] = useState(0);
  const [openSide, setopenSide ] = useState(false);

  
   const handlerSideClose= function(){
    setZindex(0)
		setopenSide(false)
	}
  
  return (
    <Router>
      <div className="App" >
        <>
          <NavBar 
          component={HomeBanner} 
          setZindex={setZindex}
          setopenSide={setopenSide}
          openSide={openSide}
          />
          <Switch>

            <Route path="/environment" component={Environment} />
            <Route path="/technology" component={Technology} />
            <Route path="/skill" component={Skill} />
            <Route path='/CourseEnviroment/:name' component={EnvironmentCourse} />
            <Route path='/CourseTecnology/:name' component={TexnologyCourse} />
            <Route path='/CourseSkill/:name' component={SkillCours} />
            

            <Route path="/products"  >
              <Products  handlerSideClose={handlerSideClose} />
            </Route >

            <Route path='/blog/:name'  >
              <Blog handlerSideClose={handlerSideClose} />
            </Route > 

            <Route exact path='/About'  >
              <About handlerSideClose={handlerSideClose} />
            </Route>

            <Route path='/Login' >
              <Login   />
            </Route>
            {/* <Route path='/admin'>
              <Admin  />
            </Route> */}
            {/* <Route path='/teacher'>
              <Teacher  />
            </Route> */}
            {/* <Route path="/Create">
              <Create />
            </Route> */}
            {/* <Route path='/Students' >
              <Students />
            </Route> */}
            {/* <Route path='/adminBlogs' >
              <Blogs  />
            </Route> */}
            {/* <Route path='/Createblog/:id' >
              <Createblog  />
            </Route> */}
            
            <Route path={`/:name/certificates`}  >
              <Gallery  />
            </Route>

            <Route  path='/:name'  >
              <Cv setCertificates={setCertificates} />
            </Route>
            
            

            <HomeBanner path='/' handlerSideClose={handlerSideClose} zIndex={zIndex}  /> 
            
          </Switch>
        </>
      
        
      </div>
    </Router>
  );
}




export default App;
