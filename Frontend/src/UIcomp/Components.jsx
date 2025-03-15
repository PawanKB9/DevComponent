import React , { useState  } from "react";
import { FaTrash , FaTrashAlt} from "react-icons/fa";

const LikeComponent1 = ({title,UserId}) => {

    const [del , setDel] = useState(false)

    const handleDelete = (e) => {

    }
    const NavigatePost = (e) => {

    }
    const NavigateProfile = (e) => {
        
    }

    return(
        <>
        <div className="flex justify-between p-1 bg-stone-200 shadow-lg">
            <button onClick={NavigatePost}>
               <img src="src\assets\react.svg" alt="" className="w-40 h-40 bg-stone-900 rounded-lg"  />
            </button>
            <div className="flex flex-col justify-between py-6">
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

    const [del , setDel] = useState(false)

    const handleDelete = (e) => {

    }
    const NavigatePost = (e) => {

    }
    const NavigateProfile = (e) => {
        
    }

    return (
        <>
           <div className="bg-gray-300 p-2 shadow-lg">
            <button onClick={NavigatePost} className="w-full h-40">
               <img src="src\assets\react.svg" alt="" className="w-full h-40 bg-gray-900 rounded-lg" />
            </button>
            <div className="flex  justify-between gap-x-4 py-6">
                <button onClick={NavigatePost}>
                   <h2 className="text-xl font-bold">Title/Component {title}</h2>
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

export{
    LikeComponent1,
    LikeComponent2,
}