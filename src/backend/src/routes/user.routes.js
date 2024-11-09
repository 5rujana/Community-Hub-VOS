import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"
import {registerUser,
        loginUser,
        logoutUser,
        refreshAccessToken,
        changeCurrentPassword,
        updateAccountDetails,
        getCurrentUser,
        updateUserAvatar,
        getUserAccountProfile} from "../controllers/user.controllers.js"


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            // name:"avatar",
            maxCount:1
        }
    ]),
    registerUser
)
router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/c/:username").get(verifyJWT, getUserAccountProfile)

export default router