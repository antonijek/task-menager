import React from "react";
import { Navigate } from "react-router-dom";
import { userData } from "../../context/UserContext";

const AuthHoc = (Component) => {
  return (props) => {
    const { user } = userData();

    return user ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" replace={true} />
    );
  };
};

export default AuthHoc;
