import React , { useState  } from "react";
import { FaThumbsUp, FaThumbsDown, FaSave, FaTrashAlt} from "react-icons/fa";
import THEMES from "./Theme.jsx";
import useTheme from "./Context.jsx"
import { useDispatch } from "react-redux"
import axios from "axios";
import { addDisLike, addLike, removeDisLike, removeLike, removeSaved } from "../RTK/CurrentUser.jsx";
import { dislikePost, likePost } from "../RTK/PostSlice.jsx";
import CodeEditor from "./CodeEditor.jsx";
import SeeCode from "./SeeCode.jsx";


const API_URL = "http://localhost:8000";

const LikeComponent1 = ({ title,userName,postId,compType }) => {
  // 1 = like , 2 = disLike , 3 = saved : for compType
  // const {userName, apply = false , postId} = req.body;

    const { theme } = useTheme();
    const apply = false;
    const dispatch = useDispatch();

    const handleDelete = async () => {
      try {
        let response = null;
        if(compType === 1){
          response = await axios.patch(`${API_URL}/post/like`, { userName, postId, apply }, { withCredentials: true });
          dispatch(removeLike({postId})); // removing postId from currentUser
          dispatch(likePost({postId ,apply})); // Decrementing the count of like on this postID
          
        } else if(compType == 2){
          response = await axios.patch(`${API_URL}/post/disLike` ,{ userName, postId, apply }, { withCredentials: true } )
          dispatch(removeDisLike({postId})); // removing postId from currentUser
          dispatch(dislikePost({postId ,apply}));// Decrementing the count of disLike on this postID
        } else if(compType == 3){
          response = await axios.patch(`${API_URL}/post/saved` , { userName, postId, apply }, { withCredentials: true })
          dispatch(removeSaved({postId})); // removing postId from currentUser
        }
      } catch (error) {
        
      }
    }
    const NavigatePost = (e) => {

    }
    const NavigateProfile = (e) => {
        
    }

    return(
        <>
        <div className={`${THEMES[theme].innerContainer} flex justify-between p-1  shadow-lg`}>
            <button onClick={NavigatePost}>
               <img src="src\assets\react.svg" alt="" className="w-40 h-40 bg-stone-900 rounded-lg"  />
            </button>
            <div className={`  flex flex-col justify-between py-6`}>
                <button onClick={NavigatePost}>
                   <h2 className="text-xl font-bold">Title/Component Name {title}</h2>
                </button>
                <button onClick={NavigateProfile}>
                   <h2 className="text-lg font-semibold">userName: who has posted this {userName}</h2>
                </button>
            </div>
            <div className="flex text-2xl text-red-500">
                <button onClick={handleDelete}><FaTrashAlt/></button>
            </div>
        </div>
        
        </>
    )
}

const LikeComponent2 = ({title,userName,postId,compType}) => {

    const { theme } = useTheme();

    const apply = false;

    const handleDelete = async () => {
      try {
        let response = null;
        if(compType === 1){
          response = await axios.patch(`${API_URL}/post/like`, { userName, postId, apply }, { withCredentials: true });
          dispatch(removeLike({postId})); // removing postId from currentUser
          dispatch(likePost({postId ,apply})); // Decrementing the count of like on this postID
          
        } else if(compType == 2){
          response = await axios.patch(`${API_URL}/post/disLike` ,{ userName, postId, apply }, { withCredentials: true } )
          dispatch(removeDisLike({postId})); // removing postId from currentUser
          dispatch(dislikePost({postId ,apply}));// Decrementing the count of disLike on this postID
        } else if(compType == 3){
          response = await axios.patch(`${API_URL}/post/saved` , { userName, postId, apply }, { withCredentials: true })
          dispatch(removeSaved({postId})); // removing postId from currentUser
        }
      } catch (error) {
        
      }
    }
    const NavigatePost = (e) => {

    }
    const NavigateProfile = (e) => {
        
    }

    return (
        <>
           <div className={`${THEMES[theme].innerContainer}  p-2 shadow-lg`}>
            <button onClick={NavigatePost} className="w-full h-40 ">
               {/* <img src="" alt="" className="w-full h-40 rounded-lg" /> */}
               {/* <CodeEditor /> */}
               {/* here the component will be displayed with only few details  */}
               <SeeCode />
            </button>
            <div className={` flex  justify-between gap-x-4 py-6`}>
                <button onClick={NavigatePost}>
                   <h2 className="text-xl font-bold">ComponentName {title}</h2>
                </button>
                <button onClick={NavigateProfile}>
                   <h2 className="text-lg font-semibold">userName: who has posted {userName}</h2>
                </button>
                <div className="flex text-2xl text-red-500">
                    <button onClick={handleDelete}><FaTrashAlt/></button>
                </div>
            </div>
           </div>
        </>
    )
}

const CardComponent = ({postId,userName}) => {
  let likeCnt = 50;
  // const [fullView ,setFullView] = useState(false)
  const [likes, setLikes] = useState(false);
  const [disLikes, setDisLikes] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [html, setHtml] = useState(`<button class="button">Click Here </button>`);
  const [css, setCss] = useState(`.button {
            padding: 15px 30px;
            font-size: 18px;
            font-weight: bold;
            color: white;
            background: linear-gradient(135deg, #ff7eb3, #ff758c);
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .button:hover {
            transform: scale(1.1);
            box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
        }`);
  const [js, setJs] = useState(``);
  const [reactCode, setReactCode] = useState(``);
  const [ show , setShow ] = useState(false); 

  const description = "This is a sample description of the component which contains more than seven words to demonstrate the read more functionality.";
  const words = description.split(" ");
  const shortDescription = words.slice(0, 10).join(" ") + (words.length > 7 ? "..." : "");

  let apply = null;
  const dispatch = useDispatch();

  const HandleLike = async () => {
    setLikes(!likes);
    apply = likes;
    
    try {
      await axios.patch(`${API_URL}/post/like` , { userName, postId, apply }, { withCredentials: true })
      if(apply){
        dispatch(addLike({postId}))
      } else{
        dispatch(removeLike({postId}))
      }
      dispatch(likePost({postId ,apply}))  // manage like count
      if(disLikes){
        setDisLikes(false);
        apply = false;
        await axios.patch(`${API_URL}/post/disLike` , { userName, postId, apply }, { withCredentials: true })
        dispatch(removeDisLike({postId})) // removing postId from currentUser
        dispatch(dislikePost({postId ,apply}));// Decrementing the count of disLike on this postID
      }
    } catch (err) {
      
    }
    setDisLikes(false);
    
  }

  const HandleDisLike = async () => {
    setDisLikes(!disLikes);
    apply = disLikes;
    
    try {
      await axios.patch(`${API_URL}/post/disLike` , { userName, postId, apply }, { withCredentials: true })
      if(apply){
        dispatch(addDisLike({postId}))
      } else{
        dispatch(removeDisLike({postId}))
      }
      dispatch(dislikePost({postId ,apply}));// manage dislike count
      if(likes){
        setLikes(false);
        apply = false;
        await axios.patch(`${API_URL}/post/like` , { userName, postId, apply }, { withCredentials: true })
        dispatch(removeLike({postId})); // removing postId from currentUser
        dispatch(likePost({postId ,apply})); // Decrementing the count of like on this postID
      }
    } catch (err) {
      
    }
    
  }

  const HandleSave = async () => {
    setSaved(!saved)
    apply = saved;
    try {
      await axios.patch(`${API_URL}/post/save` , { userName, postId, apply }, { withCredentials: true })
      if(apply){
        dispatch(addSaved({postId}))
      } else{
        dispatch(removeSaved({postId}))
      }
    } catch (err) {
      
    }
  }

  return (
  <div className=" mt-3 p-5 w-full mx-auto bg-gray-100 rounded-lg shadow-md">
    {/* User Info */}
      <div className="  flex gap-x-6 text-lg font-bold">         
        <img src="" alt="U" className="bg-red-500 w-10 h-10 text-white overflow-hidden rounded-full" />
        <span className="text-amber-600 my-auto">User Name</span>
      </div>

      <div className="flex justify-between pt-4">
      <button onClick={() => setShow(false) } className="border w-[40%] focus:bg-gradient-to-r from-red-500 to-amber-500 py-1 rounded mb-2">
          Preview
        </button>
        <button onClick={() =>{ setShow(true)}} className="border w-[40%] focus:bg-gradient-to-r from-red-500 to-amber-500 py-1 rounded mb-2">
          Copy Code 
        </button>
      </div>
      {/* Boxes and Buttons */}
      {
        !show && <div className= "my-3 h-60 p-4 border hover:border-red-500 border-amber-500 font-semibold text-lg text-center  rounded-lg ">
        <CodeEditor html={html} css={css} js={js} reactCode={reactCode} />
    </div>
      }
      {
        show && <div className="flex justify-around gap-2 pt-3 pb-3">
        {/* Display conditionally based on the logic */}
        {reactCode === "" && (html !== "" || css !== "" || js !== "") ? (
          <>
            {/* HTML Input */}
            <div className="flex flex-col items-center w-[350px]">
              <button onClick={() => navigator.clipboard.writeText(html)} className="border w-[70%] focus:bg-gradient-to-r from-red-500 to-amber-500 py-1 rounded mb-2">
                Copy HTML Code
              </button>
              <div className="p-3 h-[300px] bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <textarea
                  onChange={(e) => setHtml(e.target.value)}
                  value={html}
                  placeholder="No HTML Code Available"
                  className="w-55 h-full bg-transparent border-none focus:outline-none overflow-auto scrollbar-hide"
                />
              </div>
            </div>
  
            {/* CSS Input */}
            <div className="flex flex-col items-center w-[350px]">
              <button onClick={() => navigator.clipboard.writeText(css)} className="border w-[70%] focus:bg-gradient-to-r from-red-500 to-amber-500 py-1 rounded mb-2">
                Copy CSS Code
              </button>
              <div className="p-3 h-[300px] bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <textarea
                  onChange={(e) => setCss(e.target.value)}
                  value={css}
                  placeholder="No CSS Code Available"
                  className="w-55 h-full bg-transparent border-none focus:outline-none overflow-auto scrollbar-hide"
                />
              </div>
            </div>
  
            {/* JavaScript Input */}
            <div className="flex flex-col items-center w-[350px]">
              <button onClick={() => navigator.clipboard.writeText(js)} className="border w-[70%] focus:bg-gradient-to-r from-red-500 to-amber-500 py-1 rounded mb-2">
                Copy JavaScript Code
              </button>
              <div className="p-3 h-[300px] bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <textarea
                  onChange={(e) => setJs(e.target.value)}
                  value={js}
                  placeholder="No JavaScript is Available"
                  className="w-55 h-full bg-transparent border-none focus:outline-none overflow-auto scrollbar-hide"
                />
              </div>
            </div>
          </>
        ) : (html === "" && css === "" && js === "") ? (
          <>
            {/* React Component Input */}
            <div className="flex flex-col items-center w-[350px]">
              <button onClick={() => navigator.clipboard.writeText(reactCode)} className="border w-full focus:bg-gradient-to-r from-red-500 to-amber-500 py-2 rounded mb-2">
                Copy React Code
              </button>
              <div className="p-3 h-[300px] bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <textarea
                  onChange={(e) => setReactCode(e.target.value)}
                  value={reactCode}
                  placeholder="Enter React Component JSX"
                  className="w-55 h-full bg-transparent border-none focus:outline-none overflow-auto scrollbar-hide"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Display all inputs */}
            <div className="flex flex-col items-center w-[350px]"> Wrong Code </div>
          </>
        )}
       </div>
      }
      

      {/* Component Box */}
      {/* <button onClick={()=>{setFullView(!fullView)}} className="w-full" > */}
        
      {/* </button> */}

      {/* Title and Actions */}
      <div>
        <div className ="my-2 font-bold text-lg">Component Name</div>
        <div className={`flex gap-x-5`}>
          <div className={`bg-gray-300  flex gap-x-4 p-1 px-2 rounded-full`}>
            <button className="block" onClick={HandleLike}><FaThumbsUp title="Like" className={`text-xl m-1   ${likes ? "text-rose-600" :""} `} /></button>
            {likeCnt} |
            <button className="block" onClick={HandleDisLike}><FaThumbsDown title="Dislike" className={`text-xl m-1   ${disLikes ? "text-rose-600" : ""} `} /></button>
          </div>
          <div className="bg-gray-300 px-3 pt-1 rounded-full">
            <button onClick={HandleSave}><FaSave className={`text-xl m-1  ${saved ? "text-rose-600" : "text-gray-900"}`} />
            </button> 
           <span className="align-top">{saved ? "Saved" : "Save"}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="text-sm pt-2.5 text-gray-600 mb-4">
        {showFullDescription ? description : shortDescription}
        {words.length > 10 && (
          <button 
            className="text-blue-600 ml-2" 
            onClick={() => {setShowFullDescription(!showFullDescription)}}
          >
            {showFullDescription ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

    </div>
  );
};

export{
    LikeComponent1,
    LikeComponent2,
    CardComponent,
}

