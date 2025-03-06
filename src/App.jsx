import React, { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from './UIcomp/Navigation.jsx'
import { ThemeProvider } from './UIcomp/Context.jsx'
import FormSwitcher from './UIcomp/AllForms.jsx'
import { ChangeTheme } from './UIcomp/Theme.jsx'
import UserProfile from './User/Userprofile.jsx';






import './App.css'

function App() {


  return (
    <>
    <ThemeProvider>
      <UserProfile/>
        <ChangeTheme/>
        <FormSwitcher/>
      </ThemeProvider>
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    </>
  )
}

export default App
