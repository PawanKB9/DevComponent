import React , { useState  } from "react";
import { FaThumbsUp, FaThumbsDown, FaSave, FaTrashAlt , FaCross ,FaArrowLeft} from "react-icons/fa";
import THEMES from "./Theme.jsx";
import useTheme from "./Context.jsx";
import { useNavigate ,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// import axios from "axios";


const PostView = () => {

  const { theme } = useTheme();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { title, html, css, js, react, userName } = state || {};
// make it render by <ifram/>

  return (
    <div className=" p-5 w-full mx-auto bg-gray-100 rounded-lg shadow-md">
      {/* User Info */}
        <div className="  flex justify-between gap-x-6 text-lg font-bold px-4">         
          {/* <div>Back</div> */}
          <button onClick={() => navigate(-1)}><FaArrowLeft className={`text-2xl hover:-translate-x-2 duration-200 `}/></button>
          <div className="text-amber-600 my-auto">{userName}</div>
        </div>
 
      {/* Action Buttons */}
      <div className="flex space-x-3 largePhone:gap-x-6 my-4 ">
        <button className="border w-full focus:bg-gradient-to-r from-red-500 to-amber-500 py-2 rounded">Preview</button>
        <button className="border w-full focus:bg-gradient-to-r from-red-500 to-amber-500 py-2 rounded">Copy Code</button>
        <button className="border w-full focus:bg-gradient-to-r from-red-500 to-amber-500 py-2 rounded">Run</button>
      </div>

      {/* Component Box */}
      <div className="my-3 h-[60vh] p-3 border hover:border-red-500 border-amber-500 font-semibold text-lg text-center  rounded-lg ">
        {}
        the component will be rendered here ...
      </div>

      <div className ="my-2 font-bold text-lg">{title}</div>

    </div>
  );
};

export default PostView;