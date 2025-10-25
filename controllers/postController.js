const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try {
        const { caption, image } = req.body;
        const userId = req.user.id;

        const post = new Post({
            user: userId,
            caption,
            image
        });

        await post.save();
        res.status(201).json({ message: "Post created", post });
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("user", "username").sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const userId = req.user.id;

        if (!post.likes.includes(userId)) {
            post.likes.push(userId);
            await post.save();
            res.status(200).json({ message: "Liked" });
        } else {
            post.likes = post.likes.filter(id => id != userId);
            await post.save();
            res.status(200).json({ message: "Unliked" });
        }
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.commentOnPost = async (req, res) => {
    try {
        const { text } = req.body;
        const post = await Post.findById(req.params.id);

        post.comments.push({
            user: req.user.id,
            text
        });

        await post.save();
        res.status(200).json({ message: "Comment added" });
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
};
