import { Link , NavLink , useNavigate } from "react-router-dom";
import THEMES from "./Theme.jsx";
import useTheme from "./Context.jsx"
import { postApi  } from '../RTK/PostApi.jsx';
import { userApi  } from "../RTK/UserApi.jsx";
import { useGetCurrentUserQuery } from '../RTK/UserApi.jsx'

export const ChangeTheme = () => {
   
  const {setTheme} = useTheme()
 

  return (
      <select
      name="themes"
      id="ChangeTheme"
      onChange={(e)=>(setTheme(e.target.value))}
      className=" w-[145px] focus:outline-none">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="developer">Dev</option>
    </select>
  )
}

const Navbar = ({show}) => {
    const { data, isLoading, isError, error } = useGetCurrentUserQuery();
    const userName = data?.userName || null;
    const navigate = useNavigate();

    const prefetchMyPosts = postApi.usePrefetch('getMyPosts', {
        force: false,
    });
    const prefetchMyLikes = postApi.usePrefetch('getAllLikes', {
        force: false,
    });
    const prefetchMyDisLikes = postApi.usePrefetch('getAllDisLikes', {
        force: false,
    });
    const prefetchMySaved = postApi.usePrefetch('getAllSaved', {
        force: false,
    });

    const addPost = () => {
        if (userName) {
          navigate("/add-post");
        } else {
          navigate("/login-signup");
        }
      }
    const myProfile = () => {
        if (userName) {
          navigate("/profile");
        } else {
          navigate("/login-signup");
        }
      }
    const myLikes = () => {
        if (userName) {
          navigate("/Likes");
        } else {
          navigate("/login-signup");
        }
      }
    const myDisLikes = () => {
        if (userName) {
          navigate("/Dislikes");
        } else {
          navigate("/login-signup");
        }
      }
    const mySaved = () => {
        if (userName) {
          navigate("/Saved");
        } else {
          navigate("/login-signup");
        }
      }

    const {theme} = useTheme()

    return (        
        <div className={`${show} w-[160px] mt-33 fixed lg:flex text-lg font-semibold flex flex-col gap-2`}>
            <Link className={`nav ${THEMES[theme].bar} text-center `} to="/">Home</Link>
            <Link className={`nav ${THEMES[theme].bar} text-center`} to="/login-signup">LogIn/SignUp</Link>
            <button className={`nav ${THEMES[theme].bar} `} onClick={addPost}>Add Post</button>
            <button onMouseEnter={() => prefetchMyPosts()} className={`nav ${THEMES[theme].bar} text-center`} onClick={myProfile} >My Profile</button>
            <div className={`nav ${THEMES[theme].bar} `} > <ChangeTheme/></div>          
            <button className={`nav ${THEMES[theme].bar} `} onClick={mySaved} onMouseEnter={() => prefetchMySaved()} >Saved</button>
            <button className={`nav ${THEMES[theme].bar} `} onClick={myLikes} onMouseEnter={() => prefetchMyLikes()} >Likes</button>
            <button  className={`nav ${THEMES[theme].bar} `} onClick={myDisLikes} onMouseEnter={() => prefetchMyDisLikes()} >Dislikes</button>
            <Link className={`nav ${THEMES[theme].bar} text-center`} to="/change-password">Change Password</Link>
            <Link className={`nav ${THEMES[theme].bar} text-center`} to="/AboutUs">About Us</Link>
        </div> 
    );
};

export default Navbar;


