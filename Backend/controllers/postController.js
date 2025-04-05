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
        const { _id } = req.body;
        
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
        // console.log(result);
        return res.status(200).json({result});

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
        // console.log(result);
        return res.status(200).json(result);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

// saved posts controller 
export const savedPost = async (req ,res) => {
    try {
        const { _id } = req.body;
        // console.log(_id); 
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
        // console.log(result);
        return res.status(200).json(result);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    } 
}

// like post controller 
export const likePost = async (req ,res) => {
   try {
    // const id = req.id;
    const { _id,  apply , postId } = req.body;
    if (apply == "true" ) {
        // apply === true , assume not liked before
        await users.updateOne(
            { _id: _id },
            { $push: { likes: postId } }
        );

        await posts.updateOne(
            { _id: postId },
            { $inc: { likes: 1 } }
        );
        return res.status(200).send('post liked successfully')
    } 
    else {
        // apply === false assume likied before
        await users.updateOne(
            { _id: _id },
            { $pull: { likes: postId } }
        );
        await posts.updateOne(
            { _id: postId },
            { $inc: { likes: -1 } }
        );
        return res.status(200).send('post disliked successfully')
    }

   } catch (err) {
       console.log(err);
       return res.status(500).json({ error: "Internal server error" });
   }
}

// dislike post controller 
export const dislikePost = async (req ,res) => {
 
    try {
        const {_id, apply , postId} = req.body;

        if (apply === "true") {
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
       const { _id ,apply, postId} = req.body;
       if(apply === "true"){
          await users.updateOne(
               {_id:_id},
               { $push: {saved: postId}},
           )
       } 
       else{
           await users.updateOne(
               {_id:_id},
               {$pull: {saved: postId} },
           )
       }
       return res.status(200).send('saved post sucessfully')

    } catch (err) {
       console.log(err)
       return res.status(500).send('Internal server error');
    }
}

// filter controller - 1
export const filterPost = async (req , res) => {
    try {
        const filter = req.params.filter || "all";
        let pipeline = [];
        if (filter === 'all') {
            pipeline = [
                { $sort: { likes: -1 } },
                { $project: {
                    _id: 0,
                    postId: "$_id",
                    description: "$description",
                    title: "$title",
                    userName: "$user",
                    codeType: "$codeType",
                    html: { $ifNull: ["$html", ""] },
                    css: { $ifNull: ["$css", ""] },
                    js: { $ifNull: ["$js", ""] },
                    react: { $ifNull: ["$react", ""] },
                }},
            ];
        } else {
            pipeline = [
                { $match: { title: filter } },
                { $sort: { likes: -1 } },
                { $project: {
                    _id: 0,
                    postId: "$_id",
                    description: "$description",
                    title: "$title",
                    userName: "$user",
                    codeType: "$codeType",
                    html: { $ifNull: ["$html", ""] },
                    css: { $ifNull: ["$css", ""] },
                    js: { $ifNull: ["$js", ""] },
                    react: { $ifNull: ["$react", ""] },
                }},
            ];
        }
        const result = await posts.aggregate(pipeline);
        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
}

// filter controller - 2
export const filterCode = async (req , res ) =>{
    try {
        const filter = req.params.filter || "all";
        const code = req.params.code ? parseInt(req.params.code) : undefined;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10; // Assuming limit is declared and set
        const skip = (page - 1) * limit;
        let matchStage = {};
        if (filter !== 'all') {
            matchStage.title = filter;
        }
        if (code !== undefined) {
            matchStage.codeType = code;
        }
        const pipeline = [
            { $sort: { likes: -1 } },
            { $project: {
                _id: 0,
                postId: "$_id",
                description: "$description",
                title: "$title",
                userName: "$user",
                codeType: "$codeType",
                html: { $ifNull: ["$html", ""] },
                css: { $ifNull: ["$css", ""] },
                js: { $ifNull: ["$js", ""] },
                react: { $ifNull: ["$react", ""] },
            }},
            { $skip: skip },
            { $limit: limit }
        ];
        if (filter !== 'all' || code !== undefined) {
            pipeline.unshift({ $match: matchStage });
        }
        const result = await posts.aggregate(pipeline).toArray();
        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
}

// get post by Id controller 
export const getPostById = async( req , res ) =>{
    console.log(req.body); 
     try {
        const { postId } = req.body;
        if (!postId) {
            return res.status(400).send('Post ID is required');
        }

        const singlePost = await posts.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(postId) } },
            {$project: {
                _id: 0,
                postId: "$_id",
                description: "$description",
                title: "$title",
                userName: "$user",
                codeType: "$codeType",
                html: { $ifNull: ["$html", ""] },
                css: { $ifNull: ["$css", ""] },
                js: { $ifNull: ["$js", ""] },
                react: { $ifNull: ["$react", ""] },
            }},
            
        ])
        console.log(singlePost); 
        if (singlePost.length === 0) {
            return res.status(404).send('Post not found');
        }
        return res.status(200).send("this is the response ");
    } 
    catch (err) {
        return res.status(500).send(err);
    }
}

// get all the posts of an user controller 
export const allPosts = async (req, res) => {
    try {
        console.log(req.body); // Log the entire query object
        const { userName } = req.body;
        if (!userName) {
            return res.status(400).send('Missing userName parameter');
        }
        const allPost = await posts.aggregate([
            { $match: { user: userName } },
            { $project: {
                _id: 0,
                postId: "$_id",
                description: "$description",
                title: "$title",
                userName: "$user",
                codeType: "$codeType",
                html: { $ifNull: ["$html", ""] },
                css: { $ifNull: ["$css", ""] },
                js: { $ifNull: ["$js", ""] },
                react: { $ifNull: ["$react", ""] },
            }},
        ]); 
        return res.status(201).json(allPost);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
    }
};

// delete all liked posts controller 
export const deleteAllLiked = async (req , res ) =>{
    try {
        const { userName, likeArr } = req.body;
        if (!likeArr || likeArr.length === 0) {
            return res.status(400).send('likeArr is required');
        }
           
          // Remove all post IDs from the likes array in the users collection
          if (likeArr.length > 1) {
            await users.updateOne(
                { _id: userName },
                { $set: { likes: [] } }
            );
        } else if (likeArr.length === 1) { //remove 1 id from user collection
            await users.updateOne(
                { _id: userName },
                { $pull: { likes: likeArr[0] } }
            );
        }
       
        // Decrement the likes count in the posts collection for each post ID
        await posts.updateMany(
            { _id: { $in: likeArr } },
            { $inc: { likes: -1 } }
        );
        res.status(200).send('Likes removed and counts updated');
    } 
    catch (err) {
        res.status(500).send('Internal server error');
    }
}

// delete all disLiked posts controller  
export const deleteAllDisliked = async ( req , res ) =>{
    try {
        const { userName, disLikeArr } = req.body;
        if (!disLikeArr || disLikeArr.length === 0) {
            return res.status(400).send('disLikeArr is required');
        }
        if (disLikeArr.length > 1) {
            await users.updateOne(
                { _id: userName },
                { $set: { disLikes: [] } }
            );
        } 
        else if (disLikeArr.length === 1) { //remove 1 id from user collection
            await users.updateOne(
                { _id: userName },
                { $pull: { disLikes : disLikeArr[0] } }
            );
        }
        // Decrement the disLikes count in the posts collection for each post ID
        await posts.updateMany(
            { _id: { $in: disLikeArr } },
            { $inc: { disLikes: -1 } }
        );
        res.status(200).send('disLikes removed and counts updated sucessfully');
       } 
    catch (err) {
        res.status(500).send('Internal server error');
    } 
}

// delete all saved posts controller 
export const deleteAllSaved = async( req , res ) =>{
    try {
        const { userName } = req.body;
        await users.updateOne(
            // Remove all post IDs from the saved array in the users collection
            { _id: userName },
            { $set: { saved: [] } }
        );
        res.status(200).send('Saved removed sucessfully');
    } 
    catch (err) {
        res.status(500).send('Internal server error');
    }
}

// get other user data controller
export const getUserData = async( req , res ) =>{
    try {
        const { userName } = req.query;
        if(!userName){
            return res.status(400).send('Id not found')
        }
        const data = await users.findOne({ _id: userName }, {
            projection: {
                _id: 0,
                userName: "$_id",
                fullName: 1,
                collageName: 1,
                selfDescription: 1,
            }
        });
        if (!data) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(data);
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal server error')
    }
}

// app.delete('/deletePost' , async (req ,res) => {
//     try {
//         const { postIdArr } = req.body
//          // Delete all documents from the posts collection by their IDs
//          await posts.deleteMany({ _id: { $in: postIdArr } });
//          return res.status(200).send('all posts deleted')
//     } catch (err) {
//         return res.status(500).send('Internal server error')
//     }
// })