import express from "express";
import { getProducts, newProduct, getProductDetails, updateProduct, deleteProduct } from "../controllers/productControllers.js";
import { isAuthentificateUser , authorizeRoles} from "../middlewares/auth.js";


const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(isAuthentificateUser, authorizeRoles("admin"), newProduct);

router.route("/products/:id").get(getProductDetails);
router.route("/admin/products/:id").put(isAuthentificateUser, authorizeRoles("admin"),updateProduct);
router.route("/admin/products/:id").delete(isAuthentificateUser, authorizeRoles("admin"),deleteProduct);

export default router;
