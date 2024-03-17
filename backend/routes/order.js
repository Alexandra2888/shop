import express from "express";
import { isAuthentificateUser, authorizeRoles } from "../middlewares/auth.js";
import {
    allOrders,
    deleteOrder,
    getOrderDetails,
    myOrders,
    newOrder,
    updateOrder,
  } from "../controllers/orderControllers.js";
const router = express.Router();

router.route("/orders/new").post(isAuthentificateUser, newOrder);
router.route("/orders/:id").get(isAuthentificateUser, getOrderDetails);
router.route("/me/orders").get(isAuthentificateUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthentificateUser, authorizeRoles("admin"), allOrders);

router
  .route("/admin/orders/:id")
  .put(isAuthentificateUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthentificateUser, authorizeRoles("admin"), deleteOrder);

export default router;
