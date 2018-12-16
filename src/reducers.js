import { combineReducers } from 'redux'
import { sideBar } from './components/layouts/sideBar/reducer'
import { body } from './components/layouts/body/reducer'
const rootReducer = combineReducers({
  sideBar,
  body
})

export default rootReducer
