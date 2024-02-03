const { default: mongoose } = require('mongoose');
const PostModel = require('../models/postModel');


// all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({});
        if (!posts) {
            throw new Error("Could not fetch posts");
        }
        res.status(200).json({ message: "Fetched all posts", result: posts });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error?.message });
    }
}

// create a new post
const addPost = async (req, res) => {
    try {
        const { userId: _id } = await req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(422).json({ message: "Id not valid" });
        }
        const newpost = await PostModel.create(req.body);
        res.status(201).json({ message: "Post created", result: newpost });

    } catch (error) {
        console.log(error?.message);
        res.status(400).json({ message: error?.message });
    }
}

// edit a post
const editPost = async (req, res) => {
    try {
        const { id: _id } = await req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(422).json({ message: "Id not valid" });
        }
        const postExist = await PostModel.exists({_id:_id});
        if (!postExist) return res.status(404).json({ message: "Post not found" });
        const editedPost = await PostModel.findByIdAndUpdate(_id, req.body, { new: true });
        if (!editedPost) {
            throw new Error("Could not edit post");
        }
        // success
        res.status(200).json({ message: 'Post updated', result: editedPost });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error?.message });
    }

}

// join hackathon in post
const joinPost = async (req, res) => {
    try {
        const { id: _id } = await req.params; // postId
        const { userId } = await req.body; // person id

        if (!mongoose.Types.ObjectId.isValid(_id) || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(422).json({ message: "Id not valid" });
        }
        // post doesnt exist
        const postExist = await PostModel.exists({_id:_id}).select('userId');
        if (!postExist) return res.status(404).json({ messge: "Hackathon doesnt' exist" });

        // user cannot join posts created by themselves
        if (postExist.userId.toString() === userId) {
            throw new Error("Cannot join hackathons created by yourself");
        }
        // already joined
        const alreadyJoined = await PostModel.find({ _id, joinees: { $in: [userId] } }).countDocuments();
        if (alreadyJoined) {
            throw new Error("You have already joined");
        }
        const post = await PostModel.findByIdAndUpdate(_id, {
            $push: { joinees: userId }
        }, { new: true });

        if (!post) {
            throw new Error("Could not join hackathon");
        }
        // success
        res.status(200).json({ message: "Joined hackathon" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error?.message });
    }
}

// leave joined post
const leavePost = async (req, res) => {
    try {
        const { id: _id } = await req.params; // postId
        const { userId } = await req.body; // person id

        if (!mongoose.Types.ObjectId.isValid(_id) || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(422).json({ message: "Id not valid" });
        }
        // post doesnt exist
        const postExist = await PostModel.exists({_id:_id});
        if (!postExist) return res.status(404).json({ messge: "Hackathon doesnt' exist" });
        // have not joined
        const notJoined = await PostModel.find({ _id, joinees: { $nin: [userId] } }).countDocuments();
        if(notJoined){
            throw new Error("You have not joined hackathon");
        }
        // remove from joinees
        const post = await PostModel.findByIdAndUpdate(_id,{
            $pull:{joinees:userId}
        },{new:true});
        if(!post){
            throw new error("Could not leave hackathon");
        }
        res.status(200).json({message:"Left hackathon successfully"});

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error?.message });
    }
}



// get posts by userId
const getUserPosts = async (req, res) => {
    try {
        const { userId: _id } = await req.query;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(422).json({ message: "Id not valid" });
        }
        const userPosts = await PostModel.find({ userId: _id }, (err, result) => {
            if (err) {
                console.log(err);
                throw new Error(err);
            } else {
                console.log(result);
            }
        });
        res.status(200).json({ message: "Fetched Posts by User", result: userPosts });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error?.message });
    }
}

// delete post
const deletePost = async(req,res)=>{
    try {
        const {id:_id} = await req.params;
        const postExist = await PostModel.exists({_id:_id});
        if(!postExist){
            return res.status(404).json({message:"Post doesn't exist"});
        }
        await PostModel.findByIdAndDelete(_id);
        res.status(200).json({message:"Post deleted successfully"});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error?.message});
    }
}


module.exports = { getAllPosts, addPost, editPost, joinPost, leavePost, getUserPosts, deletePost };