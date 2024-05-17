import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);

  if (user) {
    if (allowedRoles.includes(user.role)) {
      return <Outlet />;
    } else {
      return <Navigate to={"/"} />;
    }
  } else {
    return <Navigate to={"/"} />;
  }
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.array.isRequired,
};

export default ProtectedRoute;
