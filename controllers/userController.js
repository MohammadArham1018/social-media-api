const User = require("../models/User");

exports.followUser = async (req, res) => {
    try {
        const userToFollow = await User.findById(req.params.id); 
        const currentUser = await User.findById(req.user.id);    

        if (!userToFollow.followers.includes(currentUser._id)) {
            userToFollow.followers.push(currentUser._id);
            currentUser.following.push(userToFollow._id);

            await userToFollow.save();
            await currentUser.save();

            res.status(200).json({ message: "User followed" });
        } else {
            res.status(400).json({ message: "Already following" });
        }
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
};


exports.unfollowUser = async (req, res) => {
    try {
        const userToUnfollow = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);

        if (userToUnfollow.followers.includes(currentUser._id)) {
            userToUnfollow.followers = userToUnfollow.followers.filter(
                id => id.toString() !== currentUser._id.toString()
            );

            currentUser.following = currentUser.following.filter(
                id => id.toString() !== userToUnfollow._id.toString()
            );

            await userToUnfollow.save();
            await currentUser.save();

            res.status(200).json({ message: "User unfollowed" });
        } else {
            res.status(400).json({ message: "Not following" });
        }
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
};
