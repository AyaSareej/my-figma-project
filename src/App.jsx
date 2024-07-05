import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider, AuthContext } from "./components/AuthContext";
import VerifyEmailPage from "./pages/Verifyemail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      // {
      //   path: "/verifyEmail",
      //   element: <VerifyEmailPage />,
      // },
    ],
  },
]);

const AppContent = () => {
  const { showVerifyEmailForm } = useContext(AuthContext);

  return (
    <>
      <RouterProvider router={router} />
      {showVerifyEmailForm && <VerifyEmailPage />}
    </>
  );
};



const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;