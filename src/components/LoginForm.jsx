import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/images/LogPic.png";
import GoogleImage from "../assets/icons/GoogleLogo.png";
import AppleImage from "../assets/icons/AppleLogo.png";
import FacebookImage from "../assets/icons/FacebookLogo.png";
import InputForm from "./buttons/InputForm";
import Button from "./buttons/Button";
import LinkButton from "./buttons/LinksButtons";

const LoginForm = ({ isVisible, onClose, setIsLoggedIn }) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  const handleLogin = () => {
    setIsLoggedIn(true);
    onClose();
  };

  const handleRegisterClick = () => {
    onClose();
    navigate("/register");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-items-center bg-black bg-opacity-50 z-50">
      <div className="md:shrink-0 relative flex items-center justify-center bg-[#0A0E3F] w-[1005px]  h-[750px]  md:ml-96 rounded-[19px] shadow-[2px_2px_30px_-8px_#F2F4F6] overflow-hidden">
        <div
          className="absolute w-full h-full bg-cover bg-right opacity-50"
          style={{
            backgroundImage: `url(${Image})`,
            backgroundPosition: "center",
          }}
        />
        <div className="absolute flex-col  space-y-14 bg-white w-[645px] h-full left-[360px] rounded-[19px] p-8 opacity-100">
          <h2 className="text-[#0A0E3F] text-[20px] md:text-[34px] font-noor-bold leading-[38px] md:leading-[60px] mt-6 text-center">
            تسجيل الدخول
          </h2>
          <form>
            <InputForm label="الايميل او رقم الهاتف" type="email" />
            <InputForm label="كلمة المرور" type="password" />
            <Button text="تسجيل الدخول" onClick={handleLogin} />
          </form>
          <div className=" flex justify-center display-inline">
            <a
              href="/forgot-password"
              className="text-blue-500 text-[#161D6F] font-noor-regular underline "
            >
              نسيت كلمة المرور؟
            </a>
            <p className="text-black font-noor-regular">
              ليس لديك حساب؟{" "}
              <a
                onClick={handleRegisterClick}
                className="text-blue-500 text-[#6B48FF] font-noor-regular ml-16 underline cursor-pointer"
              >
                إنشاء حساب
              </a>
            </p>
          </div>
          <div className="relative flex items-center justify-center my-14">
            <span className="absolute flex items-center justify-center font-noor-regular w-12 bg-white px-2 text-[#ACACAC] text-[24px]  ">
              أو
            </span>
            <hr className="w-[539px] bg-[#D9D9D9] h-[1px]" />
          </div>
          <div className="mt-6 flex justify-evenly">
            <LinkButton
              label="Google"
              imageUrl={GoogleImage}
              textColor="black"
              backgroundColor="cyan-500"
            />
            <LinkButton
              label="Apple"
              imageUrl={AppleImage}
              textColor="white"
              backgroundColor="black"
            />
            <LinkButton
              label="Facebook"
              imageUrl={FacebookImage}
              textColor="white"
              backgroundColor="blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
