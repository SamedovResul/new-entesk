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

// create, update get class

export const getTeacher = () =>{

  return API.get('/teacher')
}

export const createTeacher = (data) =>{

  return API.post('/teacher/register', data)
}

export const updateTeacher = (id, data) =>{

  return API.patch(`/teacher/${id}`, data)
}
// create, update get  class

export const getStudent = () =>{

  return API.get('/student')
}

export const createStudent = (data) =>{

  return API.post('/student', data)
}

export const updateStudent = (id, data) =>{

  return API.patch(`/student/${id}`, data)
}

// Timetable create get update

export const getTimetable = () => {

  return API.get('/timeTable')
}

export const createTimetable = (data) =>{

  return API.post('/timeTable', data)
}

export const updateTimetable = (data,id) =>{

  return API.patch(`/timeTable/${id}`, data)
}