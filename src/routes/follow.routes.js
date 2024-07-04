import { Router } from 'express';
import {
    toggleFollow,
    getUserAccountFollowers,
    getFollowingAccounts
} from "../controllers/follow.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router
    .route("/c/:channelId")
    .get( getUserAccountFollowers)
    .post(toggleFollow);

router.route("/u/:subscriberId").get(getFollowingAccounts);

export default router