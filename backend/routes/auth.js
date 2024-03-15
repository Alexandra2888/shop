import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  allUsers,
  getUserDetails,
  updateUser,
  deleteUser,
  uploadAvatar,
} from "../controllers/authControllers.js";
import { authorizeRoles, isAuthentificateUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

router.route("/passowrd/forgot").post(forgotPassword);
router.route("/passowrd/reset/:token").put(resetPassword);

router.route("/me").get(isAuthentificateUser, getUserProfile);
router.route("/me/update").put(isAuthentificateUser, updateProfile);
router.route("/password/update").put(isAuthentificateUser, updatePassword);
router.route("/me/upload_avatar").put(isAuthentificateUser, uploadAvatar);

router
  .route("/admin/users")
  .get(isAuthentificateUser, authorizeRoles("admin"), allUsers);
router
  .route("/admin/users/:id")
  .get(isAuthentificateUser, authorizeRoles("admin"), getUserDetails)
  .put(isAuthentificateUser, authorizeRoles("admin"), updateUser)
  .delete(isAuthentificateUser, authorizeRoles("admin"), deleteUser);

export default router;
