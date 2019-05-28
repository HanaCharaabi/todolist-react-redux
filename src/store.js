import{createStore,combineReducers} from 'redux'
import InputReducer from'./redux/reducers/inputReducer.js'
import MainReducer from'./redux/reducers/mainReducers.js'

const store=createStore(combineReducers({
  input:InputReducer,
  main:MainReducer

}))
export default store
