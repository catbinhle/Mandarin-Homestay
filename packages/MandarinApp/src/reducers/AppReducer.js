import {
    APP_LOGIN, 
    APP_LOGIN_RESPONSE_SUCCESS, 
    APP_LOGIN_RESPONSE_FAIL, 
    APP_LOGOUT,
    APP_RESET_ERROR,
    APP_REGISTER,
    APP_REGISTER_SUCCESS,
    APP_REGISTER_FAIL
} from '../defines/ActionTypes'

const initialState = {
    account: {
    },
    userInfo: {
    },
    error: null,
    isLoading: false,
    isRegister: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_LOGIN:
            return { ...state, account: action.payload, isLoading: true, error: null }
        case APP_LOGIN_RESPONSE_SUCCESS:
            return { ...state, userInfo: action.payload, isLoading: false, error: null  }
        case APP_LOGIN_RESPONSE_FAIL:
            return { ...state, error: action.payload, isLoading: false  }
        case APP_REGISTER:
            return { ...state, isLoading: true  }
        case APP_REGISTER_SUCCESS:
            return { ...state, isRegister: true, isLoading: false  }
        case APP_REGISTER_FAIL:
            return { ...state, error: action.payload, isLoading: false  }
        case APP_LOGOUT:
            return initialState
        case APP_RESET_ERROR:
            return { ...state, error: null }
        default:
          return state
      }
}
  
export default appReducer