// import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import appSaga from '../middleware/appSaga'

const sagaMiddleware = createSagaMiddleware()
const configureStore = (initialState) => {
  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(appSaga)
  return store
}

export default configureStore