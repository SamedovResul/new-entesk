import axios from 'axios'



const API = axios.create({ baseURL: 'http://localhost:5000' });


// token

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


// get all data 

export const getAlldata = (id) =>{

  return API.get(`/admin/${id}`)
}
// export const fetchBlogs = () => axios.get(url)
// export const createPosts = (data,) => axios.post(url, {...data}, );

// sign in admin and teacher
export const SigninAdmin = (data) =>{
  // console.log(signIN)
  return API.post(`/admin/signIn`,data )
}

// create timetable

export const createTimetable = (data) =>{

  return API.post('/student/timetable', data)
}

// create update delete get class

export const getClass = () =>{

  return API.get('/class')
}

export const createClass = (data) =>{

  return API.post('/class', data)
}

export const updateClass = (id, data) =>{

  return API.patch(`/class/${id}`, data)
}

export const deleteClass = (id) =>{

  return API.delete(`/class/${id}`)
}

// create update delete get class

export const getTeacher = () =>{

  return API.get('/teacher')
}

export const createTeacher = (data) =>{

  return API.post('/teacher', data)
}

export const updateTeacher = (id, data) =>{

  return API.patch(`/teacher/${id}`, data)
}

export const deleteTeacher = (id) =>{

  return API.delete(`/teacher/${id}`)
}

// 