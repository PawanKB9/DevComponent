import { Link , NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>

      {/* Vertical Nav Bar for Large Devices */}
      <nav id="navBarVertical" className="w-[180px] hidden lg:flex">
        <ul className="text-lg font-semibold flex flex-col justify-between items-start gap-2  p-2">
          <li className="nav"><Link to="/">Home</Link></li>
          <li className="nav"><Link to="/LogIn/SignUp">LogIn/SignUp</Link></li>
          <li className="nav"><Link to="/AddPost">Add Post</Link></li>
          <li className="nav"><Link to="/YourProfile">Your Profile</Link></li>
          <li className="nav"><Link to="/Themes">Themes</Link></li>
          <li className="nav"><Link to="/Saved">Saved</Link></li>
          <li className="nav"><Link to="/Likes">Likes</Link></li>
          <li className="nav"><Link to="/Dislikes">Dislikes</Link></li>        
          <li className="nav"><Link to="/About Us">About Us</Link></li>
          <li className="nav"><Link to="/help">FeedBack</Link></li>
          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;