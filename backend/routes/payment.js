import express from "express";
import { isAuthentificateUser } from "../middlewares/auth.js";
import { stripeCheckoutSession, stripeWebhook } from "../controllers/paymentControllers.js";

const router = express.Router();



router.route("/payment/checkout_session").post(isAuthentificateUser, stripeCheckoutSession);
router.route("/payment/webhook").post(stripeWebhook);


export default router;
