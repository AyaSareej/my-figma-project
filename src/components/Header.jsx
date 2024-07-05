
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import logo from "../assets/icons/Logo.png";
import LoginPage from "../pages/LoginPage";
import VerifyEmailPage from "../pages/Verifyemail";
import RegisterPage from "../pages/RegisterPage"; // Import RegisterPage

const Header = () => {
  const {
    isLoggedIn,
    handleLogout,
    showVerifyEmailForm,
    handleCloseVerifyEmailForm,
  } = useContext(AuthContext) || {};
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false); // State to manage register form visibility

  const handleLoginClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      setShowLoginForm(true);
      setShowRegisterForm(false); // Close register form when login is clicked
    }
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false); // Close login form when register is clicked
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleCloseRegisterForm = () => {
    setShowRegisterForm(false);
  };

  return (
    <header className="bg-[#F2F4F6] h-[100px] flex items-center px-8 md:px-40">
      <div className="flex items-center gap-4 mr-151">
        <NavLink
          className="bg-[#161D6F] py-1 px-2 md:px-4 rounded text-[#1EE3CF] font-noor-bold"
          to="/register"
          onClick={handleRegisterClick} // Handle register click
        >
          ابدأ
        </NavLink>
        <button
          className="bg-transparent border border-[#161D6F] text-[#161D6F] py-1 px-2 md:px-4 font-noor-bold rounded md:mr-[400px] mr-[20px]"
          onClick={handleLoginClick}
        >
          {isLoggedIn ? "سجل الخروج" : "سجل الدخول"}
        </button>
      </div>
      <nav className="links md:flex md:gap-[25.07px] gap-[13.07px] md:mr-20 mr-[20px] text-[14px] md:text-[22.35px]">
        <a
          href="#more"
          className="hover:underline font-noor-regular text-[#161D6F] mr-1"
        >
          المزيد
        </a>
        <a
          href="#sale"
          className="hover:underline font-noor-regular text-[#161D6F] mr-1 ml-1"
        >
          البيع
        </a>
        <a
          href="#citizenship-programs"
          className="hover:underline font-noor-regular text-[#161D6F] mr-1"
        >
          برامج الجنسية لدى اسيستسفاي
        </a>
        <a
          href="#about"
          className="hover:underline font-noor-regular text-[#161D6F] mr-1"
        >
          حول
        </a>
        <a
          href="#real-estate"
          className="hover:underline font-noor-regular text-[#161D6F]"
        >
          العقارات
        </a>
      </nav>
      <div className="flex items-center md:ml-8 ml-1">
        <img src={logo} alt="Logo" className="w-[160.94px] h-[33.21px]" />
      </div>
      <LoginPage isVisible={showLoginForm} onClose={handleCloseLoginForm} />
      <VerifyEmailPage
        isVisible={showVerifyEmailForm}
        onClose={handleCloseVerifyEmailForm}
      />
      <RegisterPage // Include RegisterPage component
        isVisible={showRegisterForm}
        onClose={handleCloseRegisterForm}
      />
    </header>
  );
};

export default Header;