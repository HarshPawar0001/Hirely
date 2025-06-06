import React from 'react'

import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

// if role not defined go to onboarding page
  if (
    user !== undefined &&
    !user?.unsafeMetadata?.role &&
    pathname !== "/onboarding"
  )
    return <Navigate to="/onboarding" />;

  return children;
};

export default ProtectedRoute;