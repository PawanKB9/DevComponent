import axios from "axios"
import React , { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { LikeComponent1 , LikeComponent2 } from '../UIcomp/Components.jsx'
import { useDispatch } from "react-redux"


const API_URL = "http://localhost:8000";

const Likes = () => {
    const likeArr = null
    const userName = null;
    const dispatch = useDispatch();

    const DeleteAll = async () => {
        try {
            const response = await axios.delete(`${API_URL}/allLikes`, {
            data: { userName, likeArr },
            withCredentials: true });
            if(response){
                dispatch(addField({ likes: [] })); 
            }
        } catch (err) {
            
        }
    }

    const DeleteOne = async (postId) => {
        let likeArr = [postId];
        try {
            const response = await axios.delete(`${API_URL}/allLikes`, {
            data: { userName, likeArr },
            withCredentials: true });
           if(response){
                dispatch(addField({ likes: [] })); 
            }
        } catch (err) {
            
        }
    }

    return (
        <div>
            <h1 className={`text-center text-3xl font-bold py-3`}>My Likes</h1>
            <div className={`flex text-2xl font-bold justify-between py-3 px-8`}>
                <h2>Delete All Likes</h2>
                <button onClick={DeleteAll}>
                    <FaTrashAlt className="text-red-500" />
                </button>
            </div>
                <LikeComponent1/>
                <LikeComponent2/>
        </div>
    )
}

export default Likes;