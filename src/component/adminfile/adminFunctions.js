import {React, useState,useEffect} from 'react'
import {useDispatch } from 'react-redux';
import {createUser, updateUser, deleteBlog} from '../../reducer/action'
import { useSelector } from 'react-redux';


function AdminFunctions(id) {
  let state = useSelector((state) => state.allData)
  const [currentId, setCurrentId] = useState(0)
  const [deleteId, setDeleteId] = useState(0)
  const [count, setCount] = useState(0)
  const [path, setPath] = useState("")
  const [slideimg, setSlideimg] = useState("")
  const [objectUrl, setObjectUrl] = useState("")
  console.log(slideimg)
  const dispatch = useDispatch()
  const [userData, setuserData] =  useState({ 
    title: '', 
    text: '', 
    name: '', 
    file: [],
  })
  
  console.log(id)
  const handleChangetext = (e) => {
    setuserData({...userData, [e.target.name]: e.target.value})
  }

  const update = useSelector((state) =>(
    id ? state.allData.find((blog) => blog._id === id) : null
  ))
  
  const handleChangefile = (e) => {
    setuserData({...userData, file:  [ ...userData.file, e.target.files[0] ],})
    
    const reader = new FileReader();

    // reader.onload = () =>{
    //   if(reader.readyState === 2){
    //     setObjectUrl(reader.result)
    //   }
    // }
    // reader.readAsDataURL(e.target.files[0])
  }
  // console.log(objectUrl)
  useEffect(() => {
    if(update){
      setuserData(update)
    }
  }, [update])

  function handleUpdateimg(filepath) {

    const itemToRemoveIndex = userData.file.findIndex( function(item) {
      return item.filepath === filepath
    })
    setCount(count + 1)
    userData.file.splice(itemToRemoveIndex, 1)
    return 
  }


  let Itemindex  = false
   Itemindex = userData.file.filter((img) => img.name === slideimg)
  console.log(Itemindex)
  
  const handlerSubmit = (e) =>{
    e.preventDefault();

    if(slideimg){
      if(slideimg !== userData.file[0].name){
        userData.file.splice(0,0, Itemindex[0] )
        userData.file.pop()
      } 
    }
    console.log(userData.file)
    

    if(currentId === 0){
      if(userData.title && userData.text && userData.name && userData.file){
        userData.blogName = userData.name.replace(/[^a-zA-Z ]/g, "")
        dispatch(createUser(userData));
        setuserData({
          title: '', 
          text: '', 
          blogName: '', 
          file: []
        })
      }else{
        alert("please insert data")
      }
    }else{
      
      dispatch(updateUser(currentId, userData))
     
      setCurrentId(0)
      setuserData({
        title: '', 
        text: '', 
        blogName: '', 
        file: []
      })
    }
    
  }
  // console.log(state)

  useEffect(() => {
    if(deleteId){
      dispatch(deleteBlog(deleteId))
      // console.log(deleteId)
    }
    console.log()
    
  }, [deleteId,dispatch])


  return{
    handleChangetext,
    setuserData,
    handleChangefile,
    setSlideimg,
    update,
    handlerSubmit,
    state,
    userData,
    setCurrentId,
    handleUpdateimg,
    currentId
  }

}

export default AdminFunctions
