import { combineReducers } from "redux";

import blogs from './blogReducer/reducer'
import admin from './crmRedux/reducer/adminReducer'
import classReducer from './crmRedux/reducer/classReducer'
import timetableReducer from './crmRedux/reducer/timetableReducer'
import teacherReducer from './crmRedux/reducer/teacherReducer'
import studentReducer from './crmRedux/reducer/studentReducer'
import teachertable from './crmRedux/reducer/teachertable'
import calendarReducer from './crmRedux/reducer/calendarReducer'


export default combineReducers({
  blogs,
  admin,
  classReducer,
  timetableReducer,
  teacherReducer,
  teachertable,
  studentReducer,
  calendarReducer
})