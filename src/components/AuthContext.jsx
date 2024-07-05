import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [showVerifyEmailForm, setShowVerifyEmailForm] = useState(false);
  const [isRegistered, setRegistered] = useState(false);

  const handleLoginClick = () => {
    setLoginFormVisible(true);
  };

  const handleCloseLoginForm = () => {
    setLoginFormVisible(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setLoginFormVisible(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleShowVerifyEmailForm = () => {
    setShowVerifyEmailForm(true);
  };

  const handleCloseVerifyEmailForm = () => {
    setShowVerifyEmailForm(false);
  };

  const handleRegisterSuccess = () => {
    console.log("Success-handleLoginSuccess");
    setRegistered(true);
    setShowVerifyEmailForm(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoginFormVisible,
        handleLoginClick,
        handleCloseLoginForm,
        handleLoginSuccess,
        handleLogout,
        isRegistered,
        showVerifyEmailForm,
        handleShowVerifyEmailForm,
        handleCloseVerifyEmailForm,
        handleRegisterSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
