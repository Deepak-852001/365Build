const express = require('express');
const router = express.Router();
const user = require('../components/user')
const post = require("../components/post")

router.get("/posts", post.getAllPost);
router.get("/users", user.getAllUsers);
router.get("/posts/:id/comments", post.getCommentsByPostId)
router.get("users/:id", user.getUserById);
router.get("users/:id/comments", user.getCommentsByUserId)
router.get("/users/:id/posts", user.getPostByUserId)

module.exports = router;
