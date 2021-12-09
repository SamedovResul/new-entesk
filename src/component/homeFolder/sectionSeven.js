import {React, useState, } from 'react';
import uuid from 'react-uuid'
import { getDatabase, ref, set} from "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import { send } from 'emailjs-com';
import { useAlert } from 'react-alert'
// import database from '../../firebase/firebase';

const SectionSeven = () =>{
  const alert = useAlert()
  const [userId, setUserId] = useState()
  
  const [user,setUser] = useState({
    name: "",
    email: "",
    phone: "",
    topic:"",
    date: ''
  })


  const time = new Date()

  



  function writeUserData(e) {
    e.preventDefault();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    

    if(user.name && user.email && user.phone && user.topic ){
      if( re.test(user.email) ){
      alert.show(<div style={{ color: 'green' }}>Sizinlə əlaqə saxlanilacaq </div>)
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
      })
      }else{
        alert.show(<div style={{ color: 'red' }}>Xahiş edirik xanaları  düzgün doldurun</div>)
      }
    }else{
      alert.show(<div style={{ color: 'red' }}>Xahiş edirik xanaları doldurun</div>)
    }
    
    


      
    const date = `${time.getFullYear()},${time.getMonth()+1},${time.getDate()},${time.getHours()}:${time.getMinutes()}`
      setUserId(userId + 1)
    if(user.name && user.email && user.phone && user.topic ){
      
    const db = getDatabase();
    set(ref(db, 'users/' + uuid()), {
      username: user.name,
      email: user.email,
      phone : user.phone,
      topic : user.topic,
      date :date
    });
    
    }else if(user.name === 'Admin' && user.email === 'Entesk'){
      console.log(true)
      window.open( '/admin')
    }
  }

  // console.log(user)


  let name, value
  const hadlerGetClientInfo = (event) =>{
    event.preventDefault();
    name = event.target.name
    value = event.target.value
    // console.log(value)
    setUser({...user, [name]: value })
  }

  
  

  return(
    <div className="section-7-main-div">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-text-div">
                <h6>Bizimlə Əlaqə</h6>
              </div>

              <form className="section-7-form"  >
                <input
                  type="text" 
                  value={user.name}
                  name='name'
                  onChange={hadlerGetClientInfo}
                  placeholder="AD VƏ SOYAD"
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
                <input 
                  type="number" 
                  value={user.phone}
                  id="phone" 
                  name="phone" 
                  onChange={hadlerGetClientInfo}
                  placeholder="Telefon" 
                  required
                ></input>
                <textarea
                  type="text" 
                  value={user.topic}
                  id="phone" 
                  name="topic" 
                  onChange={hadlerGetClientInfo}
                  placeholder="Movzu"
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