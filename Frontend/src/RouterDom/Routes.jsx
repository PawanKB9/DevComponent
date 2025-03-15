import { BrowserRouter as Router , Route , Routes ,  } from 'react-router-dom'
import { Home } from '../UIcomp/Home.jsx'
import FormSwitcher from '../UIcomp/AllForms.jsx'
import UserProfile from '../User/Userprofile.jsx';
const AllRoute = () => {
    return (
        <Router>
            <Routes>
                {/*  We will render Main card inside home: / 
                     NavBar and Filters are also inside Home   */}
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<></>} />
            <Route path='/login-signup' element={<FormSwitcher/>} />
            <Route path='/add-post' element={<div></div>} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/saved' element={<UserProfile />} />
            <Route path='/likes' element={<UserProfile />} />
            <Route path='/dislikes' element={<UserProfile />} />
            <Route path='/about' element={<UserProfile />} />
            <Route path='/feedback' element={<UserProfile />} />
            </Routes>
        </Router>
    )

}

export default AllRoute;