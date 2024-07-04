import { Router } from 'express';
import {
    togglePostLike,
    toggleCommentLike,
    toggleThreadLike,
    getLikedPosts
} from "../controllers/like.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/toggle/p/:postId").post(togglePostLike);
router.route("/toggle/c/:commentId").post(toggleCommentLike);
router.route("/toggle/t/:threadId").post(toggleThreadLike);
router.route("/posts").get(getLikedPosts);

export default router 