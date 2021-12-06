import axios from 'axios'

const url = 'https://entesk-app.herokuapp.com/users';






export const fetchUsers = () => axios.get(url)
// export const createPosts = (data,) => axios.post(url, {...data}, );
export const createPosts = (data) =>{
  const formdata = new FormData()
    
    const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
    }


    for (let i = 0; i < data.file.length; i++) {
      
      formdata.append('files', data.file[i])
    }
  
  formdata.append('blogName', data.blogName)
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

    formdata.append('file', updateUser.fileName)
    formdata.append('blogName', updateUser.blogName)
    formdata.append('text', updateUser.text)
    formdata.append('title', updateUser.title)

    for (let i = 0; i < updateUser.file.length; i++) {
      
      formdata.append('files', updateUser.file[i])
    }


    return axios.patch(`${url}/${id}`, formdata, config);
}

export const deleteBlogs = (id) => axios.delete(`${url}/${id}`)



     
