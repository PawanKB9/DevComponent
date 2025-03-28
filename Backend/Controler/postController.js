import mongoose from "mongoose";
import { users } from "../models/user.js";
import { posts } from "../models/post.js";


// add post controller 
export const addPost =  async(req ,res) => {
    try {
        const {codeType ,title ,description ,html ,css ,js ,react} = req.body;

        if( !title || !codeType ){
           return res.status(400).json({message:'some information is missing', success:false})
        }
        if(!html && !react){
           return res.status(400).json({message:'code is required', success:false})
        }

        // create the post
        if(codeType == 1){ // react
            const newPost = new posts({
                user:req.id,
                title,
                description,
                codeType: 1,
                react,
                likes: 0,
                disLikes: 0,
            })
            await newPost.save();
            return res.status(200).send('Post added sucessfully')
        }
        else if(codeType == 2){ // non-react with tailwind
            const newPost = new posts({
                _id: req.id,
                title,
                description,
                codeType: 2,
                html,
                js,
                likes: 0,
                disLikes: 0,
                
            }) 
            await newPost.save();
            return res.status(200).send('Post added sucessfully')  
        }
        else if(codeType == 3){ // non-react
            const newPost = new posts({
                _id: req.id,                
                title,
                description,
                codeType: 3,
                html,
                css,
                js,
                likes: 0,
                disLikes: 0,
            })
            await newPost.save();
            return res.status(200).send('Post added sucessfully')
        }

        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}


// liked posts controller 
export const likedPost = async (req ,res) => {
    try {
        const { _id } = req.id;
        const result = await users.aggregate([
            {
                $match: {_id: _id }
            },
            {
                $unwind: "$likes"
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "likes",
                    foreignField: "_id",
                    as: "postDetails"
                }
            },
            {
                $unwind: { path: "$postDetails", preserveNullAndEmptyArrays: true }
            },
            {
                $project: {
                    _id: 0,
                    postId: "$postDetails._id",
                    description: "$postDetails.description",
                    title: "$postDetails.title",
                    userId: "$postDetails.user",
                    codeType: "$postDetails.codeType",
                    html: { $ifNull: ["$postDetails.html", ""] },
                    css: { $ifNull: ["$postDetails.css", ""] },
                    js: { $ifNull: ["$postDetails.js", ""] },
                    react: { $ifNull: ["$postDetails.react", ""] },

                }
            },
        ])

        // process the result
        console.log(result);
        // return res.status(200).json({message:"liked the post" , success:true});

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    } 
}


// disliked posts controller 
export const dislikedPost = async (req ,res) => {
    try {
        const { _id } = req.body;
        const result = await users.aggregate([
            {
                $match: {_id: _id }
            },
            {
                $unwind: "$disLikes"
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "disLikes",
                    foreignField: "_id",
                    as: "postDetails"
                }
            },
            {
                $unwind: { path: "$postDetails", preserveNullAndEmptyArrays: true }
            },
            {
                $project: {
                    _id: 0,
                    postId: "$postDetails._id",
                    description: "$postDetails.description",
                    title: "$postDetails.title",
                    userId: "$postDetails.user",
                    codeType: "$postDetails.codeType",
                    html: { $ifNull: ["$postDetails.html", ""] },
                    css: { $ifNull: ["$postDetails.css", ""] },
                    js: { $ifNull: ["$postDetails.js", ""] },
                    react: { $ifNull: ["$postDetails.react", ""] },

                }
            },
        ])

        // process the result
        console.log(result);
        // return res.status(200).json(result);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}


// saved posts controller 
export const savedPost = async (req ,res) => {
    try {
        const { _id } = req.body;
        const result = await users.aggregate([
            {
                $match: {_id: _id }
            },
            {
                $unwind: "$saved"
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "saved",
                    foreignField: "_id",
                    as: "postDetails"
                }
            },
            {
                $unwind: { path: "$postDetails", preserveNullAndEmptyArrays: true }
            },
            {
                $project: {
                    _id: 0,
                    postId: "$postDetails._id",
                    description: "$postDetails.description",
                    title: "$postDetails.title",
                    userId: "$postDetails.user",
                    codeType: "$postDetails.codeType",
                    html: { $ifNull: ["$postDetails.html", ""] },
                    css: { $ifNull: ["$postDetails.css", ""] },
                    js: { $ifNull: ["$postDetails.js", ""] },
                    react: { $ifNull: ["$postDetails.react", ""] },

                }
            },
        ])
        // process the result
        console.log(result);
        // return res.status(200).json(result);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    } 
}

// like post controller 
export const likePost = async (req ,res) => {
   try {
    const id = req.id;
    const { apply , postId} = req.body;
    if (apply === true ) {
        // apply === true assume not liked before
        await users.updateOne(
            { _id: id },
            { $push: { likes: postId } }
        );

        await posts.updateOne(
            { _id: postId },
            { $inc: { likes: 1 } }
        );
       } else {
           // apply === false assume likied before
           await users.updateOne(
               { _id: id },
               { $pull: { likes: postId } }
           );
           await posts.updateOne(
               { _id: postId },
               { $inc: { likes: -1 } }
           );
       }
       return res.status(200).send('action preformed sucessfully')

   } catch (err) {
       console.log(err);
       return res.status(500).json({ error: "Internal server error" });
   }
}

// dislike post controller 
export const dislikePost = async (req ,res) => {
 
    try {
        const {_id, apply , postId} = req.body;

        if (apply) {
            // apply === true assume not dislikied before
            await users.updateOne(
                { _id: _id },
                { $push: { disLikes: postId } }
            );
            await posts.updateOne(
                { _id: postId },
                { $inc: { disLikes: 1 } }
            );
        } else {
            // apply === false assume dislikied before
            await users.updateOne(
                { _id: _id },
                { $pull: { disLikes: postId } }
            );
            await posts.updateOne(
                { _id: postId },
                { $inc: { disLikes: -1 } }
            );
        }
        return res.status(200).send('Liked sucessfully')
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

// save post controller 
export const savePost = async (req ,res) => {
    try {
       const {_id ,apply, postId} = req.body;
       if(apply){
          await db.users.updateOne(
               {_id:_id},
               { $push: {saved: postId}},
           )
       } else{
           await db.users.updateOne(
               {_id:_id},
               {$pull: {saved: postId} },
           )
       }
       return res.status(200).send('save Updated sucessfully')

    } catch (err) {
       console.log(err)
       return res.status(500).send('Internal server error');
    }
}

// filter controller 
export const filterPost = async (req , res) => {
    const filter = req.params.filter || "all";
    // agreegate the data : 1. on basus of most liked , "2. most viewed (not possible in our case)"
    // send the filtered data as res
}