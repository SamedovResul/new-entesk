import { combineReducers } from "redux";

import blogs from './blogReducer/reducer'
import admin from './crmRedux/reducer/reducer'
import classReducer from './crmRedux/reducer/classReducer'
import timetable from './crmRedux/reducer/timetable'
import teacherReducer from './crmRedux/reducer/teacherReducer'

export default combineReducers({
  blogs,
  admin,
  classReducer,
  timetable,
  teacherReducer
})