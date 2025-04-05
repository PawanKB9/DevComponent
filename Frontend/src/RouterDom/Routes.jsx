import { BrowserRouter as Router , Route , Routes ,  } from 'react-router-dom'
import { Home } from '../UIcomp/Home.jsx'
import FormSwitcher from '../UIcomp/AllForms.jsx'
import UserProfile from '../User/Userprofile.jsx';
import AboutUs from '../UIcomp/AboutUs.jsx'
import Likes from '../User/LikePage.jsx';
import DisLikes from '../User/DisLikePage.jsx';
import Saved from '../User/SavedPage.jsx';

const AllRoute = () => {

    let ind = 0;
    const isLoggedIn = true;

    if(isLoggedIn){
        ind = 3;
    }
    return (
        <Router>
            <Routes>
                {/*  We will render Main card inside home: / 
                     NavBar and Filters are also inside Home   */}
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<></>} />
            <Route path='/login-signup' element={<FormSwitcher ind={0} />} />
            <Route path='/add-post' element={<FormSwitcher ind={ind} />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/saved' element={<Saved />} />
            <Route path='/likes' element={<Likes />} />
            <Route path='/dislikes' element={<DisLikes />} />
            <Route path='/about' element={<UserProfile />} />
            <Route path='/feedback' element={<UserProfile />} />
            <Route path='/AboutUs' element={<AboutUs/>} />
            </Routes>
        </Router>
    )

}

export default AllRoute;