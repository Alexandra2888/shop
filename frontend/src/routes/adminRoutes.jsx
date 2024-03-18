import { Route } from "react-router-dom";
import ProtectedRoute from "../pages/auth/protectedRoute/ProtectedRoute";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import ListProducts from "../pages/admin/listProducts/ListProducts";
import NewProduct from "../pages/admin/newProduct/NewProduct";
import UpdateProduct from "../pages/admin/updateProduct/UpdateProduct";
import UploadImages from "../pages/admin/uploadImages/UploadImages";
import ListOrders from "../pages/admin/listOrders/ListOrders";
import ProcessOrder from "../pages/admin/processOrder/ProcessOrder";
import ListUsers from "../pages/admin/listUsers/ListUsers";
import UpdateUser from "../pages/admin/updateUser/UpdateUser";
import ProductReviews from "../pages/admin/productReviews/ProductReviews";

const adminRoutes = () => {
  return (
    <>
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute admin={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ProtectedRoute admin={true}>
            <ListProducts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/product/new"
        element={
          <ProtectedRoute admin={true}>
            <NewProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products/:id"
        element={
          <ProtectedRoute admin={true}>
            <UpdateProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products/:id/upload_images"
        element={
          <ProtectedRoute admin={true}>
            <UploadImages />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute admin={true}>
            <ListOrders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders/:id"
        element={
          <ProtectedRoute admin={true}>
            <ProcessOrder />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute admin={true}>
            <ListUsers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users/:id"
        element={
          <ProtectedRoute admin={true}>
            <UpdateUser />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/reviews"
        element={
          <ProtectedRoute admin={true}>
            <ProductReviews />
          </ProtectedRoute>
        }
      />
    </>
  );
};

export default adminRoutes;