import React, { useState } from 'react'
import { ThemeProvider } from './UIcomp/Context.jsx'
import { Provider } from 'react-redux';
import store from './RTK/store.jsx';
import AllRoute from './RouterDom/Routes.jsx'




import './App.css'

function App() {


  return (
    <>
      <ThemeProvider>
      <Provider store={store} >
         <AllRoute />
      </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
