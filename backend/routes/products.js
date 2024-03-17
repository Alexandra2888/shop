import express from "express";
import {
  canUserReview,
  createProductReview,
  deleteProduct,
  deleteReview,
  getProductDetails,
  getProductReviews,
  getProducts,
  newProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import { isAuthentificateUser, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();


router.route("/products").get(getProducts);
router
  .route("/admin/products")
  .post(isAuthentificateUser, authorizeRoles("admin"), newProduct);

router.route("/products/:id").get(getProductDetails);

router
  .route("/admin/products/:id")
  .put(isAuthentificateUser, authorizeRoles("admin"), updateProduct);
router
  .route("/admin/products/:id")
  .delete(isAuthentificateUser, authorizeRoles("admin"), deleteProduct);

router
  .route("/reviews")
  .get(isAuthentificateUser, getProductReviews)
  .put(isAuthentificateUser, createProductReview);

router
  .route("/admin/reviews")
  .delete(isAuthentificateUser, authorizeRoles("admin"), deleteReview);

router.route("/can_review").get(isAuthentificateUser, canUserReview);

export default router;
