import { Link , NavLink } from "react-router-dom";


const Navbar = ({show}) => {


    return (
        <>
           
              <div className={`${show}`}>
                <nav id="navBarVertical" className="w-[180px] mt-30 fixed lg:flex">
                    <ul className="text-lg font-semibold flex flex-col gap-2 p-2">
                        <li className="nav glassyEffect"><Link to="/">Home</Link></li>
                        <li className="nav glassyEffect"><Link to="/login-signup">LogIn/SignUp</Link></li>
                        <li className="nav glassyEffect"><Link to="/AddPost">Add Post</Link></li>
                        <li className="nav glassyEffect"><Link to="/profile">Your Profile</Link></li>
                        <li className="nav glassyEffect"><Link to="/Themes">Themes</Link></li>
                        <li className="nav glassyEffect"><Link to="/Saved">Saved</Link></li>
                        <li className="nav glassyEffect"><Link to="/Likes">Likes</Link></li>
                        <li className="nav glassyEffect"><Link to="/Dislikes">Dislikes</Link></li>
                        <li className="nav glassyEffect"><Link to="/About Us">About Us</Link></li>
                        <li className="nav glassyEffect"><Link to="/help">Feedback</Link></li>
                    </ul>
                </nav>
                </div>
        
        </>
    );
};

export default Navbar;
