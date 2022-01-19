import {React, useState,useEffect } from 'react';
import uuid from 'react-uuid'
import { getDatabase, ref, set} from "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import { send } from 'emailjs-com';
import { useAlert } from 'react-alert'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import database from '../../firebase/firebase';

const SectionSeven = ({myRef}) =>{
  
  const alert = useAlert()
  const [userId, setUserId] = useState()
  // const [date, setDate] = useState('')
  let date
  // const [phone, setPhone] = useState(0)
  // console.log(phone)
  const [user,setUser] = useState({
    name: "",
    email: "",
    phone: "",
    topic:"",
    date: ``,
    text:""
  })


  const time = new Date()

  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  


  function writeUserData(e) {
    e.preventDefault();
    let pattern1 = /@gmail.com/;
    let pattern2 = /@mail.ru/;
    
      
      console.log(date)
    if(user.name && user.email && user.phone && user.topic ){
      if(  re.test(user.email) ){
      
      alert.show(<div style={{ color: 'green' }}>Sizinlə əlaqə saxlanilacaq </div>)

      console.log()
      
      date = `${time.getFullYear()}.${time.getMonth()+1}.${time.getDate()}.${time.getHours()}:${time.getMinutes()}`

      user.date = date
      console.log(date)
      setUser({
        date: date
      })
      console.log(user)
      send(
        'service_n5lz3c9',
        'template_p1ycadr',
        user,
        'user_8z8JeLlj7Y36toehPZWQm'
      )
      .then((response) => { 
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
      
      setUser({
        name: "",
        email: "",
        phone: "",
        topic:"",
        text:""
      })
      }else{
        alert.show(<div style={{ color: 'red' }}>Xahiş edirik Mail addresi  düzgün yazın </div>)
      }
    }else{
      alert.show(<div style={{ color: 'red' }}>Xahiş edirik xanaları doldurun</div>)
    }
  }

 

  // console.log(user)


  let name, value
  const hadlerGetClientInfo = (event) =>{
    event.preventDefault();
    name = event.target.name
    value = event.target.value
    // console.log(user)
    setUser({...user, [name]: value })
  }

  
  

  return(
    <div className="section-7-main-div">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-text-div" ref={myRef}>
                <h6>Bizimlə Əlaqə</h6>
              </div>

              <form className="section-7-form"  >
                <input
                  type="text" 
                  value={user.name}
                  name='name'
                  onChange={hadlerGetClientInfo}
                  placeholder="Ad və Soyad"
                  required
                     ></input>
                <input 
                  type="email" 
                  value={user.email}
                  id="mail" 
                  name="email" 
                  onChange={hadlerGetClientInfo}
                  placeholder="E-mail" 
                  required
                ></input>
                <PhoneInput 
                   country={"az"}
                  type="number" 
                  value={user.phone}
                  id="phone" 
                  name="phone" 
                  onChange={phone => setUser({
                    ...user, phone: phone
                  })}
                  placeholder="Telefon" 
                  required
                />
                <input 
                  type="text" 
                  value={user.topic}
                  id="topic" 
                  name="topic" 
                  onChange={hadlerGetClientInfo}
                  placeholder="Mövzu" 
                  required
                ></input>
                <textarea
                  type="text" 
                  value={user.text}
                  id="phone" 
                  name="text" 
                  onChange={hadlerGetClientInfo}
                  placeholder="Mətn"
                  required
                ></textarea>
                <button type="submit" onClick={writeUserData} >Göndər</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default SectionSeven