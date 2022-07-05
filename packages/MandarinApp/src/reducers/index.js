import { combineReducers } from "redux"
import appReducer from "./AppReducer"
import homeReducer from "./HomeReducer"
import newsReducer from "./NewsReducer"

const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer,
    news: newsReducer
})
  
export default rootReducer