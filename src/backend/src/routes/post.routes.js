import { Router } from 'express';
import {
    getAllPosts,
    publishAPost,
    getPostById,
    updatePost,
    deletePost
} from "../controllers/post.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();
router.use(verifyJWT);

router
    .route("/")
    .get(getAllPosts)
    .post(
        upload.fields([
            {
                name: "postFile",
                maxCount: 1,
            },
            {
                name: "thumbnail",
                maxCount: 1,
            },
            
        ]),
        publishAPost
    );

router
    .route("/:postId")
    .get(getPostById)
    .delete(deletePost)
    .patch(upload.single("thumbnail"), updatePost);

export default router