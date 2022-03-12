import { combineReducers } from "redux";

import blogs from './blogReducer/reducer'
import admin from './crmRedux/reducer/adminReducer'
import classReducer from './crmRedux/reducer/classReducer'
import timetableReducer from './crmRedux/reducer/timetableReducer'
import teacherReducer from './crmRedux/reducer/teacherReducer'
import studentReducer from './crmRedux/reducer/studentReducer'
import teacherAuth from './crmRedux/reducer/teacherAuth'


export default combineReducers({
  blogs,
  admin,
  classReducer,
  timetableReducer,
  teacherReducer,
  teacherAuth,
  studentReducer,
  teacherAuth
})