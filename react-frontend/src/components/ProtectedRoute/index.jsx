import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function ProtectedRoute({ children }) {
  const token = Cookies.get('jwt_access');

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return children;
}
