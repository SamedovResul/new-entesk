import {React, useState, useEffect} from 'react';
import {useSpring} from 'react-spring'
import 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Environment from './component/environmentFolder/environment'
import Technology from './component/technologyFolder/technology'
import NavBar from './component/NavFolder/Navigation'
import HomeBanner from './component/homeFolder/homeBanner'
import Skill from './component/skillFolder/skill'
import admin from './component/adminfile/admin';
import Products from './component/products/product'
import Blog from './component/blog/blog'
import About from './component/About/about'
import EnvironmentCourse from './component/environmentFolder/Course/Course'
import TexnologyCourse from './component/technologyFolder/Course/Course'
import SkillCours from './component/skillFolder/Course/Course'
import { useDispatch } from 'react-redux';
import {getUser} from './reducer/action'


function App(props) {
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
            
            <Route path='/admin' component={admin} />

            <Route path="/products"  >
              <Products  handlerSideClose={handlerSideClose} />
            </Route >

            <Route path='/blog/:name'  >
              <Blog handlerSideClose={handlerSideClose} />
            </Route > 

            <Route path='/About'  >
              <About handlerSideClose={handlerSideClose} />
            </Route>
            <Route path='/CourseEnviroment/:name' component={EnvironmentCourse} />
            <Route path='/CourseTecnology/:name' component={TexnologyCourse} />
            <Route path='/CourseSkill/:name' component={SkillCours} />
              <HomeBanner path='/' handlerSideClose={handlerSideClose} zIndex={zIndex}  />
            
          </Switch>
      </div>
    </Router>
  );
}




export default App;
