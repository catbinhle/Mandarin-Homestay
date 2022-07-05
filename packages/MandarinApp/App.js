/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { LogBox } from 'react-native'
 import Navigator from './src/navigator/Navigator';
 import { Provider } from 'react-redux'
 import store from './src/store/ConfigureStore'
  
 export default function App() {
   LogBox.ignoreAllLogs()
   LogBox.ignoreLogs(['Warning: ...'])
   let configureStore = store() 
   return (
     <Provider store={configureStore}> 
      <Navigator/>
     </Provider>
   )
 }
 
