const express = require("express");
const router = express.Router();
const { followUser, unfollowUser } = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");

router.put("/follow/:id", verifyToken, followUser);
router.put("/unfollow/:id", verifyToken, unfollowUser);

module.exports = router;
