import React, { useState } from 'react'
import { ThemeProvider } from './UIcomp/Context.jsx'
import { Provider } from 'react-redux';
import store from './RTK/store.jsx';
import AllRoute from './RouterDom/Routes.jsx'
import OtherUserProfile from './User/OtherUserProfile.jsx'
import Likes from './User/LikePage.jsx'
import Saved from './User/SavedPage.jsx';
import DisLikes from './User/DisLikePage.jsx';
import PostView from './UIcomp/PostView.jsx';



import './App.css'

function App() {


  return (
    <>
      <ThemeProvider>
      <Provider store={store} >
         <AllRoute />
         
        {/* <OtherUserProfile/> */}
         {/* <DisLikes/> */}
         {/* <Saved/> */}
         {/* <PostView/> */}
      </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
