import { Link , NavLink } from "react-router-dom";
import THEMES from "./Theme.jsx";
import useTheme from "./Context.jsx"

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

    // ${THEMES[theme].outerContainer}
    // use it if needed
    const {theme} = useTheme()

    return (        
        <div className={`${show} w-[160px] mt-33 fixed lg:flex text-lg font-semibold flex flex-col gap-2`}>
            <Link className={`nav ${THEMES[theme].bar} `} to="/">Home</Link>
            <Link className={`nav ${THEMES[theme].bar} `} to="/login-signup">LogIn/SignUp</Link>
            <Link className={`nav ${THEMES[theme].bar} `} to="/add-post">Add Post</Link>
            <Link className={`nav ${THEMES[theme].bar} `} to="/profile">Your Profile</Link>
            <div className={`nav ${THEMES[theme].bar} `} > <ChangeTheme/></div>          
            <Link className={`nav ${THEMES[theme].bar} `} to="/Saved">Saved</Link>
            <Link className={`nav ${THEMES[theme].bar} `} to="/Likes">Likes</Link>
            <Link  className={`nav ${THEMES[theme].bar} `} to="/Dislikes">Dislikes</Link>
            <Link className={`nav ${THEMES[theme].bar} `} to="/About Us">About Us</Link>
            <Link className={`nav ${THEMES[theme].bar} `} to="/help">Feedback</Link>
        </div> 
    );
};

export default Navbar;
