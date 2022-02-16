import axios from 'axios'



const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getAlldata = (id) =>{

  return API.get(`/admin/${id}`)
}
// export const fetchBlogs = () => axios.get(url)
// export const createPosts = (data,) => axios.post(url, {...data}, );
export const SigninAdmin = (data) =>{
  // console.log(signIN)
  return API.post(`/admin/signIn`,data )
}

export const createTimetable = (data) =>{

  return API.post('/student/timetable', data)
}

// export const updateBlogs = (id, updateBlog) => {

//     const config = {
//     headers: {
//         'content-type': 'multipart/form-data'
//     }
//     }

//     const formdata = new FormData()

//     formdata.append('name', updateBlog.name)
//     formdata.append('text', updateBlog.text)
//     formdata.append('title', updateBlog.title)
    
//     for (let i = 0; i < updateBlog.file.length; i++) {
//       formdata.append('files', updateBlog.file[i])
//     }
//     let postData = []

//     for (let i = 0; i < updateBlog.file.length; i++) {
//       postData.push(JSON.stringify(updateBlog.file[i]))
//       console.log(postData[i])
//     }
//     for (let i = 0; i < postData.length; i++) {
//       formdata.append('file',  postData[i])
//     }
      
    
//     console.log(postData)
//     return axios.patch(`${url}/${id}`, formdata, config);
// }

// export const deleteBlogs = (id) => axios.delete(`${url}/${id}`)



     
