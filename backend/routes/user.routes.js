import express from "express"
import { deleteAll, login, logout, register } from "../controller/user.controller.js"
import verifyUser from "../middleware/verifyUser.middleware.js"

const router= express.Router()

router.route("/reg").post(register)
router.route("/login").post(login)
router.route("/delete").get(deleteAll)
router.route("/logout").get(verifyUser,logout)

export default router