import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDatabase, ref, set} from "firebase/database";
import uuid from 'react-uuid';
import insta from '../../images/saytisnta.png'
import swp from '../../images/saytwp.png'
import saytyoutube from '../../images/saytyoutube.png'
import saytfb from '../../images/saytfb.png'
import saytlinkedin from '../../images/saytlinkedin.png'
import tiktoksayt from '../../images/tiktoksayt.png'
import { send } from 'emailjs-com';
import ReactWhatsapp from 'react-whatsapp';


const FooterSection =(props) =>{
  // console.log(props)
  const [subscribe, setSubscribe] = useState({
    email: "",
    error: 'example@gmail.com'
  })

 

  const time = new Date()
  
  
  function writeSubscribe(e){


    

    e.preventDefault()
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    

    if(re.test(subscribe.email)){
      send(
        'service_n5lz3c9',
        'template_q5qpc7d',
        subscribe,
        'user_8z8JeLlj7Y36toehPZWQm'
        )
        setSubscribe({
        email: '',
        error: 'example@gmail.com'
        })
    }else{
      setSubscribe({
        error: '! invalid email'
      })
    }
    
    if(subscribe){
      const date = `${time.getFullYear()},${time.getMonth()+1},${time.getDate()},${time.getHours()}:${time.getMinutes()}:${time.getMilliseconds()}`
      const db = getDatabase();
      set(ref(db, 'subscribers/' + uuid()), {
      subscriber:subscribe,
      date:date
    });
    // setSubscribe('')
    }

  }


  return(
    <article className="footer-section">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-6">
              <ul>
                <p>Keçidlər</p>
                <Link to='/'>
                  <li>
                    Ana Səhifə
                  </li>
                </Link >
                <Link to='/products'>
                  <li>
                    Kurslar
                  </li>
                </Link >
                <Link to='/About'>
                  <li>
                    Haqqımızda
                  </li>
                </Link >
                <Link to={{
											pathname:'/',
											aboutProps:{
												name: 'toAbout'
											}
										}}>
                  <li>
                    Əlaqə
                  </li>
                </Link >
              </ul>
            </div>  
            {/* kurslar */}
            <div className="col-md-3 col-sm-6 col-6 ">
              <ul>
                <p>Kurslar</p>
                {
                  props.data.map((subject) =>{
                    const  {name, Category,id} = subject
                  return(
                    <Link key={id} 
                      to={{pathname:`${Category}/${name}`,
                    aboutProps:{
                      name: name,
                    }
                    }}>
                      <li>
                        {name}
                      </li>
                    </Link >
                    )
                  })
                }
              </ul>
            </div>
          {/* elaqe */}

          <div className="col-md-6">
            <div className="div-1">

              <ul>
                <p>Əlaqə</p>
                <li>
                  Bakı ş. Yasamal r. 
                </li>
                <li>
                  A. M. Şərifzadə küç. 237 A 
                </li>
                <li>
                  M. İnşaatçilar yaxınlığı
                </li>
                <li>contact@enteskedu.com</li>
              </ul>

              
              <div className='subscribe' >
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    onChange={(e) =>{
                      setSubscribe({
                        ...subscribe, email: e.target.value
                      })
                    }} 
                    value={subscribe.email}
                    placeholder={subscribe.error}  required />
                </div>
                <button type="submit" onClick={writeSubscribe} > Abunə ol </button>
              </div>
                {
                  subscribe.error === '! invalid email' ? (
                    <p class='error' > ! email düzgün yazılmayıb </p>
                  ):
                  (
                    <p> </p>
                  )
                }

            </div>
              
              <div className="social-media">
                <p>
                  <span
                    onClick={() =>{<ReactWhatsapp number="077-347-20-63" message="Hello World!!!" />}}
                  >
                    <img src={swp} alt="img" />
                  </span>
                  <a href="https://api.whatsapp.com/send?phone=994558067669" >
                    +994 55 806 76 69
                  </a>
                </p>
                <p>
                  <span>
                    <img src={insta} alt="img" />
                  </span>
                  <a href="https://www.instagram.com/enteskedu/" >
                  @enteskedu
                  </a>
                </p>
                <p>
                  <span>
                     <img src={saytfb} alt="img" />
                  </span>
                  <a href="https://www.facebook.com/enteskedu-103143677933426" >
                    @enteskedu
                  </a>
                </p>
                <p>
                  <span>
                     <img src={saytyoutube} alt="img" />
                  </span>
                  <a href="https://www.youtube.com/channel/UCML2-bEpQ6NFKMIYUew_LBQ" >
                    @enteskedu
                  </a>
                </p>
                <p>
                  <span>
                     <img src={tiktoksayt} alt="img" />
                  </span>
                  <a href="https://www.instagram.com/enteskedu/" >
                  @enteskedu
                  </a>
                </p>
                <p>
                  <span>
                     <img src={saytlinkedin} alt="img" />
                  </span>
                  <a href="https://www.instagram.com/enteskedu/" >
                  @enteskedu
                  </a>
                </p>

              </div>
              
              
          </div>



            <div className="col-md-12">
              <p>Entesk. Bütün hüquqlar qorunur. ©2021</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FooterSection