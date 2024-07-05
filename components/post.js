const Post = require('../models/post')

async function getAllPost(req, res) {
    const data = await Post.find();
    res.json({data: data})
}

async function getCommentsByPostId(req, res){
    const postId = req.params.id;
    const data = await Post.find({id: postId});
    if(data.length){
        res.json({data: data.comments})
    } else {
        res.json({message:"no post found"})
    }
}



module.exports = {getAllPost, getCommentsByPostId}