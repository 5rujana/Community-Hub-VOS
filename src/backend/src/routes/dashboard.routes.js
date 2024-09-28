import { Router } from 'express';
import {
    getAccountStats, 
    getAccountPosts
} from "../controllers/dashboard.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/stats/:accountId").get(getAccountStats);
router.route("/posts/:accountId").get(getAccountPosts);

export default router