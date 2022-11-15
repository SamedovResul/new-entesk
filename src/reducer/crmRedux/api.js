import axios from 'axios'


// http://localhost:5000/ https://metatesk.herokuapp.com/
const API = axios.create({ baseURL: 'http://localhost:5000/' });


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


export const SigninAdmin = (data) =>{
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

// create, update get teacher

export const getTeacher = () =>{

  return API.get('/teachers')
}

export const createTeacher = (data) =>{

  return API.post('/teachers/register', data)
}

export const updateTeacher = (id, data) =>{

  return API.patch(`/teachers/${id}`, data)
}


//  get post teacher search

export const getTeacherTable = (id) =>{
  return API.patch(`/teacher/${id}`)
}

export const createComment = (data) =>{
  return API.put('/teacher/addComment',data)
}

export const SearchByDateForTeacher = (search) =>{
  return API.get(
    `/teacher/search?startDate=${search.from}&endDate=${search.to}&state=${search.state}`
    )
}

// create, update get  student

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


export const SearchByDate = (search) =>{
  return API.get(
    `/timeTable/search?startDate=${search.from}&endDate=${search.to}&teacher_Name=${search.teacher_Name}&student_Name=${search.student_Name}`
    )
}

export const ConfirmOrCancel = (id,data) =>{
  return API.patch(`/timeTable/state/${id}`,data)
} 






