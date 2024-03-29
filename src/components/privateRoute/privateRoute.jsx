import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.userAuth.isLoggedIn);
  if (!user) {
    alert("You are not register!");
    return <Navigate to="/teachers" replace />;
  }

  return children;
};

export default PrivateRoute;
