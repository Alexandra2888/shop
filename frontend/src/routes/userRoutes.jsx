import { Route } from "react-router-dom";

import ProductDetails from "../pages/product/productDetails/ProductDetails";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Profile from "../pages/profile/Profile/Profile";
import UpdateProfile from "../pages/profile/updateProfile/UpdateProfile";
import ProtectedRoute from "../pages/auth/protectedRoute/ProtectedRoute";
import UploadAvatar from "../pages/profile/updateProfile/UpdateProfile";
import UpdatePassword from "../pages/profile/updatePassword/UpdatePassword";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetPassword/ResetPassword";
import Cart from "../pages/cart/Cart";
import Shipping from "../pages/shipping/Shipping";
import ConfirmOrder from "../pages/confirmOrder/ConfirmOrder";
import PaymentMethod from "../pages/paymentMethod/PaymentMethod";
import MyOrders from "../pages/myOrders/MyOrders";
import OrderDetail from "../pages/orderDetail/OrderDetail";
import Invoice from "../pages/invoice/Invoice";
import Home from "../pages/home/Home";

const userRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset/:token" element={<ResetPassword />} />

      <Route
        path="/me/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/me/update_profile"
        element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/me/upload_avatar"
        element={
          <ProtectedRoute>
            <UploadAvatar />
          </ProtectedRoute>
        }
      />

      <Route
        path="/me/update_password"
        element={
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
        }
      />

      <Route path="/cart" element={<Cart />} />
      <Route
        path="/shipping"
        element={
          <ProtectedRoute>
            <Shipping />
          </ProtectedRoute>
        }
      />
      <Route
        path="/confirm_order"
        element={
          <ProtectedRoute>
            <ConfirmOrder />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment_method"
        element={
          <ProtectedRoute>
            <PaymentMethod />
          </ProtectedRoute>
        }
      />

      <Route
        path="/me/orders"
        element={
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/me/order/:id"
        element={
          <ProtectedRoute>
            <OrderDetail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/invoice/order/:id"
        element={
          <ProtectedRoute>
            <Invoice />
          </ProtectedRoute>
        }
      />
    </>
  );
};

export default userRoutes;