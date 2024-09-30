import { Router } from 'express';
import {
    createThread,
    getUserThreads,
    updateThread,
    deleteThread
} from "../controllers/thread.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();
router.use(verifyJWT);

router.route("/").post(createThread);
router.route("/user/getThreads").get(getUserThreads);
router.route("/:threadId").patch(updateThread).delete(deleteThread);

export default router