import { 
    NEWS_GET_LIST_RES_SUCCESS
} from '../defines/ActionTypes'

const initialState = {
    newsList: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_GET_LIST_RES_SUCCESS:
            return { ...state, newsList: action.payload }
        default:
          return state
      }
}
  
export default newsReducer