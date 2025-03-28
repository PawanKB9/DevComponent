import axios from "axios"
import React , { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { LikeComponent1 , LikeComponent2 } from '../UIcomp/Components.jsx'
import { useDispatch } from "react-redux"


const API_URL = "http://localhost:8000";

const DisLikes = () => {
    const disLikeArr = [id1 , id2, id3];
    const userName = [userId1];
    const dispatch = useDispatch();

    const DeleteAll = async () => {
        try {
            const response = await axios.delete(`${API_URL}/allDisLikes` , {userName ,disLikeArr} , {withCredentials: true} )
            if(response){
                dispatch(addField({ disLikes: [] })); 
            }
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

            
                <LikeComponent1/>
                <LikeComponent2/>
            
        </div>
    )
}

export default DisLikes;