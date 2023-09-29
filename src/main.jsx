import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
// import store  from './features/UserSlice.jsx'

import UserReducer from './features/UserSlice.jsx'
import { Provider } from 'react-redux'

const  store = configureStore({
  reducer: {
      users: UserReducer
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <Provider store={store}>
      <App/>
     </Provider>
  </React.StrictMode>,
)
