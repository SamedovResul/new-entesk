import axios from 'axios'

const url = 'http://localhost:5000/users';






export const fetchUsers = () => axios.get(url)
// export const createPosts = (data,) => axios.post(url, {...data}, );
export const createPosts = (data) =>{
  const formdata = new FormData()
    console.log(data)
    const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
    }


    for (let i = 0; i < data.file.length; i++) {
      
      formdata.append('files', data.file[i])
    }
  
  formdata.append('name', data.name)
  formdata.append('text', data.text)
  formdata.append('title', data.title)
    console.log(data)


    return axios.post(url,formdata,config )
    
    
}


export const updateUsers = (id, updateUser) => {

    const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
    }

    const formdata = new FormData()

    formdata.append('blogName', updateUser.blogName)
    formdata.append('text', updateUser.text)
    formdata.append('title', updateUser.title)
    console.log(updateUser)
    for (let i = 0; i < updateUser.file.length; i++) {
      formdata.append('files', updateUser.file[i])
    }
    let postData = []

    for (let i = 0; i < updateUser.file.length; i++) {
      postData.push(JSON.stringify(updateUser.file[i]))
      console.log(postData[i])
    }
    for (let i = 0; i < postData.length; i++) {
      formdata.append('file',  postData[i])
    }
      
    
    console.log(postData)
    return axios.patch(`${url}/${id}`, formdata, config);
}

export const deleteBlogs = (id) => axios.delete(`${url}/${id}`)



     
