import {combineReducers} from 'redux'
import ticketReducer from './ticket'

export default combineReducers({
  ticket: ticketReducer
})