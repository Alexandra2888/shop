import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config({ path: ".env" });

import { connectDatabase } from "../dbConnect.js";

connectDatabase();

// Import all routes
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", productRoutes);
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", orderRoutes);
app.use("/api/v1/", paymentRoutes)

app.use(express.json({ limit: "10mb" }));

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}`);
});
