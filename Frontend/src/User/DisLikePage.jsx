// import axios from "axios"
import React , { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { LikeComponent1 , LikeComponent2 ,DisLikeCard } from '../UIcomp/Components.jsx'
import { useDispatch ,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectGetAllDisLikesResult ,selectGetCurrentUserResult } from '../RTK/Selectors.jsx'
import { useLazyGetAllDisLikesQuery} from '../RTK/PostApi.jsx'
import { useDeleteDislikesMutation } from '../RTK/UserApi.jsx'

// const API_URL = "http://localhost:8000";

const DisLikes = () => {
    const navigate = useNavigate()
    const cachedDisLikes = useSelector(selectGetAllDisLikesResult);
    const [trigger, { data: lazyData, isLoading: lazyLoading, error: lazyError }] = useLazyGetAllDisLikesQuery();
    useEffect(() => {
        if (!cachedDisLikes) {
          trigger();
        }
      }, [cachedDisLikes, trigger]);
      
    const userData = useSelector(selectGetCurrentUserResult);
    const userName = userData?.userName || null;
    useEffect(() => {
        if (!userName) {
          navigate('/login-signup');
        }
      }, [userName, navigate]);
    const disLikes = cachedDisLikes || lazyData;

    const [deleteDislikes, { isError, error }] = useDeleteDislikesMutation();

    const DeleteAll = async () => {
        const disLikeArr = disLikes.map((post) => post.postId);
        try {
            await deleteDislikes({userName, disLikeArr}).unwrap();
            // const response = await axios.delete(`${API_URL}/allDisLikes` , {
            // data: { userName, disLikeArr },
            // withCredentials: true } )
            // if(response){
            //     dispatch(addField({ disLikes: [] })); 
            // }
        } catch (err) {
            
        }
    }
    const DeleteOne = async (postId) => {
        let disLikeArr = [postId];
        try {
            await deleteDislikes({userName, disLikeArr}).unwrap();
            // const response = await axios.delete(`${API_URL}/allDisLikes` , {
            // data: { userName, disLikeArr },
            // withCredentials: true } )
            // if(response){
            //     dispatch(addField({ disLikes: [] })); 
            // }
        } catch (err) {
            
        }
    }

    return (
        <div>
            <h1 className={`text-center text-3xl font-bold py-3`}>My DisLikes</h1>
            <div className={`flex text-2xl font-bold justify-between py-3 px-8`}>
                <h2>Delete All DisLikes</h2>
                <button onClick={DeleteAll}>
                    <FaTrashAlt />
                </button>
            </div>

            <div className=" overflow-hidden flex flex-col gap-4">
            {disLikes.map(({ title, userName, postId ,description }) => (
            <div key={postId} className={`flex justify-between gap-x-2 p-1`}>
                <DisLikeCard title={title} description={description} userName={userName} postId={postId} />
                <button onClick={() => DeleteOne(postId)} className="text-xl mx-4 text-red-500">
                <FaTrashAlt />
                </button>
             </div>
            ))}

            {/* <LikeComponent2/> */}
            </div>
            
        </div>
    )
}

export default DisLikes;