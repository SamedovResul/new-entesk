import { combineReducers } from "redux";

import blogs from './blogReducer/reducer'
import admin from './crmReducer/reducer'

export default combineReducers({
  blogs,
  admin
})