import { combineReducers } from "redux";

import blogs from './blogReducer/reducer'
import admin from './crmReducer/reducer'
import crmData from './crmReducer/dataReducer'

export default combineReducers({
  blogs,
  admin,
  crmData
})