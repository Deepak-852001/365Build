const User = require('../models/user');
const Post = require('../models/post');
const user = require('../models/user');

async function getAllUsers(req, res) {
    const data = await User.find();
    res.json({data: data})
}

async function getUserById(req, res) {
    const userId = req.params.id;
    const data = await User.find({id: userId})
    if(data.length) {
        res.json({data: data})
    } else {
        res.json({message: "no user found"})
    }
}

async function getCommentsByUserId(req, res) {
    const userId = req.params.id;
    const data = await User.find({id: userId})
    if(data.length) {
        res.json({data: data.comments})
    } else {
        res.json({message: "no comments found"})
    }
}

async function getPostByUserId(req, res) {
    const userId = req.params.id;
    const data = await Post.find({userId: userId});
    if(data.length) {
        res.json({data: data})
    }else {
        res.json({message: "no post found"})
    }
}

module.exports = {getPostByUserId, getCommentsByUserId, getAllUsers, getUserById}