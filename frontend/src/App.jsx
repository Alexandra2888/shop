import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Toaster} from "react-hot-toast";
import Home from "./pages/home/Home";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import ProtectedRoute from "./pages/auth/protectedRoute/ProtectedRoute";
import ProductDetails from "./pages/product/productDetails/ProductDetails";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Profile from "./pages/profile/Profile/Profile";
import UpdateProfile from "./pages/profile/updateProfile/UpdateProfile";
import UploadAvatar from "./pages/profile/uploadAvatar/UploadAvatar";
import UpdatePassword from "./pages/profile/updatePassword/UpdatePassword";


function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center"/>
        <Header />
        <div className="container">
          <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;