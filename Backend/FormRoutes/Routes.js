import express from 'express'
import { users , posts } from '../DataBase/Schema.js';

const app = express();


// Note: i have used id , userId , userName but all are same we will change it later

app.get('/:filter?' , async (req , res) => {
    const filter = req.params.filter || "all";
    // agreegate the data : 1. on basus of most liked , "2. most viewed (not possible in our case)"
    // send the filtered data as res
}) 

app.get('/liked' , async (req ,res) => {
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

        // process the resulte
        console.log(result);

        // return res.status(200).json(result);

    } catch (err) {
        console.log(err);

        return res.status(500).json({ error: "Internal server error" });
    }
   
})

app.get('/disliked' , async (req ,res) => {
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

        // process the resulte
        console.log(result);

        // return res.status(200).json(result);

    } catch (err) {
        console.log(err);

        return res.status(500).json({ error: "Internal server error" });
    }

})

app.get('/saved' , async (req ,res) => {
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

        // process the resulte
        console.log(result);

        // return res.status(200).json(result);

    } catch (err) {
        console.log(err);

        return res.status(500).json({ error: "Internal server error" });
    }
   
})

app.get('/post' , async (req ,res) => {

})

app.put('/post/like' , async (req ,res) => {
    
     // using this _id fetch id from "User" collection & add that postId to it
    // then find components from "Post" collection by postId and ++likeCnt
    try {
        const {_id ,apply , postId} = req.body;
        if (apply) {
            // apply === true assume not likied before
            await db.users.updateOne(
                { _id: _id },
                { $push: { likes: postId } }
            );
            await db.posts.updateOne(
                { _id: postId },
                { $inc: { likes: 1 } }
            );
        } else {
            // apply === false assume likied before
            await db.users.updateOne(
                { _id: _id },
                { $pull: { likes: postId } }
            );
            await db.posts.updateOne(
                { _id: postId },
                { $inc: { likes: -1 } }
            );
        }
        return res.status(200).send('Liked sucessfully')

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
})

app.put('/post/disLike' , async (req ,res) => {
    
    // using this _id fetch id from "User" collection & add that postId to it
    // then find components from "Post" collection by postId and ++disLikeCnt

    try {
        const {_id, apply , postId} = req.body;

        if (apply) {
            // apply === true assume not dislikied before
            await db.users.updateOne(
                { _id: _id },
                { $push: { disLikes: postId } }
            );
            await db.posts.updateOne(
                { _id: postId },
                { $inc: { disLikes: 1 } }
            );
        } else {
            // apply === false assume dislikied before
            await db.users.updateOne(
                { _id: _id },
                { $pull: { disLikes: postId } }
            );
            await db.posts.updateOne(
                { _id: postId },
                { $inc: { disLikes: -1 } }
            );
        }
        return res.status(200).send('Liked sucessfully')
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
})

app.put('/post/save' , async (req ,res) => {
    
     // using this _id fetch id from "User" collection & add that postId to it
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
})


// app.delete('/post/like' , async (req ,res) => {
//     const {_id , postId} = req.body;
//      // using this _id fetch id from "User" collection & Delete that postId to it
//     // then find components from "Post" collection by postId and --likeCnt
// })
// app.delete('/post/disLike' , async (req ,res) => {
//     const {_id , postId} = req.body;
//     // using this _id fetch id from "User" collection & delete that postId to it
//     // then find components from "Post" collection by postId and --disLikeCnt
// })
// app.delete('/post/save' , async (req ,res) => {
//     const {_id , postId} = req.body;
//      // using this _id fetch id from "User" collection & delete that postId to it
// })


app.get('/profile' , async (req ,res) =>{
    
    // find user details by id from "User" then 
    // find all posts by userId from "Post"
    try {
        const { _id } = req.body;
        if(!_id){
            return res.status(400).send('Id not found')
        }
        const User = await users.findById(_id);
        if (!User) {
            return res.status(404).send('User not found');
        }
        return res.status(200).send(User)
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error')
    }

})

app.patch('/profile', async(req, res) => {
    
    // partial update : update only specified fields
    try {
        const {_id, fullName , collageName, password, selfDescription, email } = req.body;
        if(!_id){
            return res.status(400).send('Id not found')
        }
        const updatedUser = await users.findByIdAndUpdate(
            _id,
            { fullName, collageName, password, selfDescription, email },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        return res.status(200).send(`updated sucessfully ${updatedUser}`)

    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error')
    }
});


// Acount deletion
app.delete('/delete' , async (req ,res) => {
    const userId = req.body;
    // find and delete the user from "User" 
    // also find its all posts from "Post" and delete all the post
})

app.post('/login' , async(req ,res) => {
    const {userId ,password} = req.body;
    if(!userId || !password){
        res.status(400).send('Username and password are required')
    }
    // find user from database then validate it after that send res for succesfull
    // if not found then through error in res


})

app.post('/signup' , async(req ,res) => {

    // find userId and email from database if it exist then send res -> user already exist.
    // If not found then create the new instance and store the information.
    // apply middleware also

    try {
        const {_id, fullName, selfDescription ,password ,collageName ,email} = req.body;
        if(!_id || !password || !email || !fullName){
           return res.status(400).send('Username ,email and password all are required')
        }

        // aplly middleware before saving
        // bcrypt , authentication , token generation, etc.

        const newUser = new users({
            _id,
            fullName,
            collageName,
            password,
            email,
            selfDescription,
        })
        await newUser.save()
        console.log(`${newUser}`)
        return res.status(200).send('user added')
    }  catch (err) {
        console.error(err);
        
        if (err.code === 11000) { // Correct way to check duplicate key error
            return res.status(409).json({ error: "User already exists" });
        }

        return res.status(500).json({ error: "Internal server error" });
    }

})

app.post('/addpost' , async(req ,res) => {
    try {
        const {_id ,language ,title ,description ,html ,css ,js ,react} = req.body;
        if(!language || !title || !_id){
           return res.status(400).send('userId ,language and title are required or login if not loggedIn')
        }
        if(!html && !react){
           return res.status(400).send('code is required')
        }
        // create the post
    
        if(language == 1){ // react
            const newPost = new Post({
                title,
                description,
                codeType: 1,
                react,
                likes: 0,
                disLikes: 0,
                user: _id,
            })
            await newPost.save();
            return res.status(200).send('Post added sucessfully')
        }
        else if(language == 2){ // non-react with tailwind
            const newPost = new Post({
                title,
                description,
                codeType: 2,
                html,
                js,
                likes: 0,
                disLikes: 0,
                user: _id,
                
            }) 
            await newPost.save();
            return res.status(200).send('Post added sucessfully')  
        }
        else if(language == 3){ // non-react
            const newPost = new Post({
                title,
                description,
                codeType: 3,
                html,
                css,
                js,
                likes: 0,
                disLikes: 0,
                user: _id,                
            })
            await newPost.save();
            return res.status(200).send('Post added sucessfully')
        }

        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
})



db.collection.aggregate([
    { 
      $match: { 
        _id: { 
          $in: [ 
            ObjectId("60d5ec49f1c2ab3a1c9f0e01"), 
            ObjectId("60d5ec49f1c2ab3a1c9f0e02") 
          ] 
        } 
      } 
    },
    { 
      $project: { 
        field1: 1,  // include field1
        field2: 1,  // include field2
        // Exclude _id if you don't need it: _id: 0
      } 
    }
  ])
  