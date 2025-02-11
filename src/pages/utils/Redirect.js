import { Navigate } from "react-router-dom";

const Redirect = ({ targetUrl }) => {
  return <Navigate to={targetUrl} replace />;
};

export default Redirect;