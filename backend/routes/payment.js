import express from "express";
import { isAuthentificateUser } from "../middlewares/auth.js";
import { stripeCheckoutSession } from "../controllers/paymentControllers.js";

const router = express.Router();



router.route("/payment/checkout_session").post(isAuthentificateUser, stripeCheckoutSession);


export default router;
