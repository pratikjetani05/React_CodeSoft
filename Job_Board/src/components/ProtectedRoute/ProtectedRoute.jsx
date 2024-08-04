import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const currentuser = useSelector((state) => state.user.currentuser);

  if (currentuser == null || currentuser.existingUser.email == null) {
    return <Navigate to="/login" replace />;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoute;
