import React , { useState  } from "react";
import { FaThumbsUp, FaThumbsDown, FaSave, FaTrashAlt} from "react-icons/fa";
import THEMES from "./Theme.jsx";
import useTheme from "./Context.jsx"

const LikeComponent1 = ({title,UserId}) => {

    const { theme } = useTheme();
    const [del , setDel] = useState(false)

    const handleDelete = (e) => {

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
                   <h2 className="text-lg font-semibold">UserId: who has posted this {UserId}</h2>
                </button>
            </div>
            <div className="flex text-2xl text-red-500">
                <button onClick={handleDelete}><FaTrashAlt/></button>
            </div>
        </div>
        
        </>
    )
}

const LikeComponent2 = ({title,UserId}) => {

    const { theme } = useTheme();
    const [del , setDel] = useState(false)

    const handleDelete = (e) => {

    }
    const NavigatePost = (e) => {

    }
    const NavigateProfile = (e) => {
        
    }

    return (
        <>
           <div className={`${THEMES[theme].innerContainer}  p-2 shadow-lg`}>
            <button onClick={NavigatePost} className="w-full h-40">
               <img src="src\assets\react.svg" alt="" className="w-full h-40 bg-gray-900 rounded-lg" />
            </button>
            <div className={` flex  justify-between gap-x-4 py-6`}>
                <button onClick={NavigatePost}>
                   <h2 className="text-xl font-bold">ComponentName {title}</h2>
                </button>
                <button onClick={NavigateProfile}>
                   <h2 className="text-lg font-semibold">UserId: who has posted {UserId}</h2>
                </button>
                <div className="flex text-2xl text-red-500">
                    <button onClick={handleDelete}><FaTrashAlt/></button>
                </div>
            </div>
           </div>
        </>
    )
}


const CardComponent = () => {
  let likeCnt = 50;
  const [likes, setLikes] = useState(false);
  const [disLikes, setDisLikes] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = "This is a sample description of the component which contains more than seven words to demonstrate the read more functionality.";
  const words = description.split(" ");
  const shortDescription = words.slice(0, 10).join(" ") + (words.length > 7 ? "..." : "");

  return (
    <div className=" mt-3 p-5 w-full mx-auto bg-gray-100 rounded-lg shadow-md">
      {/* User Info */}
        <div className="  flex gap-x-6 text-lg font-bold">         
          <img src="" alt="U" className="bg-red-500 w-10 h-10 text-white overflow-hidden rounded-full" />
          <span className="text-amber-600 my-auto">User Name</span>
        </div>
 

      {/* Action Buttons */}
      <div className="flex space-x-3 largePhone:gap-x-6 my-4 ">
        <button className="border w-full focus:bg-gradient-to-r from-red-500 to-amber-500 py-2 rounded">Preview</button>
        <button className="border w-full focus:bg-gradient-to-r from-red-500 to-amber-500 py-2 rounded">Copy Code</button>
        <button className="border w-full focus:bg-gradient-to-r from-red-500 to-amber-500 py-2 rounded">Run</button>
      </div>

      {/* Component Box */}
      <div className="my-3 h-70 p-3 border hover:border-red-500 border-amber-500 font-semibold text-lg text-center  rounded-lg ">
        {}
        the component will be rendered here ...
      </div>

      {/* Title and Actions */}
      <div>
        <div className ="my-2 font-bold text-lg">Component Name</div>
        <div className={`flex gap-x-5`}>
          <div className={`bg-gray-300  flex gap-x-4 p-1 px-2 rounded-full`}>
            <button className="block" onClick={() => setLikes(!likes)}><FaThumbsUp  className={`text-xl m-1  ${likes ? "text-rose-600" : ""} `} /></button>
            {likeCnt} |
            <button className="block" onClick={() => setDisLikes(!disLikes)}><FaThumbsDown className={`text-xl m-1   ${disLikes ? "text-rose-600" : ""} `} /></button>
          </div>
          <div className="bg-gray-300 px-3 pt-1 rounded-full">
            <button onClick={() => setSaved(!saved)}><FaSave className={`text-xl m-1  ${saved ? "text-rose-600" : "text-gray-900"}`} />
            </button> 
           <span className="align-top">{saved ? "Saved" : "Save"}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="text-sm text-gray-600 mb-4">
        {showFullDescription ? description : shortDescription}
        {words.length > 10 && (
          <button 
            className="text-blue-600 ml-2" 
            onClick={() => setShowFullDescription(!showFullDescription)}
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