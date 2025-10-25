const express = require('express');
const router = express.Router();
const {
    createPost,
    getAllPosts,
    likePost,
    commentOnPost
} = require('../controllers/postController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, createPost);
router.get('/', getAllPosts);
router.put('/like/:id', verifyToken, likePost);
router.post('/comment/:id', verifyToken, commentOnPost);

module.exports = router;
