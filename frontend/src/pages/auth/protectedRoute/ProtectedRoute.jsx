import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";


const ProtectedRoute = ({ children }) => {
  const { isAuthentificated, loading } = useSelector((state) => state.auth);

  if (loading) return <Loader />;

  if (!isAuthentificated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;