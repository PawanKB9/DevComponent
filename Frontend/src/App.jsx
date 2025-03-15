import React, { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from './UIcomp/Navigation.jsx'
import { ThemeProvider } from './UIcomp/Context.jsx'
import FormSwitcher from './UIcomp/AllForms.jsx'
import { ChangeTheme } from './UIcomp/Theme.jsx'
import UserProfile from './User/Userprofile.jsx';
import { LikeComponent1 , LikeComponent2 } from './UIcomp/Components.jsx'
import Filter from './UIcomp/Filter.jsx'
import { Home } from './UIcomp/Home.jsx'
import { Provider } from 'react-redux';
import store from './RTK/store.jsx';
import AllRoute from './RouterDom/Routes.jsx'




import './App.css'

function App() {


  return (
    <>
    
      
    
        {/* <LikeComponent1/>
        <LikeComponent2/> */}
        {/* <Home/> */}
        {/* <FormSwitcher/> */}
      
      <BrowserRouter>
   
       
    
     
      </BrowserRouter>
      <ThemeProvider>
      <Provider store={store} >
        {/* <UserProfile/>
        <ChangeTheme/> */}
      {/* <Filter/> */}
         {/* <Home/> */}
         <AllRoute />
      </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
