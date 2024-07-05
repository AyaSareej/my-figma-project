import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import LinkButton from "../components/buttons/LinksButtons";
import Image from "../assets/images/LogPic.png";
import GoogleImage from "../assets/icons/GoogleLogo.png";
import AppleImage from "../assets/icons/AppleLogo.png";
import FacebookImage from "../assets/icons/FacebookLogo.png";
import InputForm from "../components/buttons/InputForm";
import Button from "../components/buttons/Button";

const LoginPage = ({ isVisible, onClose }) => {
  const { handleLoginSuccess } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    handleLoginSuccess();
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="md:shrink-0 relative bg-[#0A0E3F] max-w-5xl w-[1005px] h-[750px] rounded-[19px] shadow-[2px_2px_30px_-8px_#F2F4F6] overflow-hidden">
        <div
          className="absolute w-full h-full bg-cover bg-right opacity-50"
          style={{
            backgroundImage: `url(${Image})`,
            backgroundPosition: "295% 280%",
          }}
        />
        <div className="relative flex flex-col justify-center space-y-14 bg-white md:w-[645px] w-[400px] h-full left-[360px] rounded-[19px] p-8 opacity-100">
          <h2 className="text-[#0A0E3F] text-[20px] md:text-[34px] font-noor-bold leading-[38px] md:leading-[60px] mt-6 text-center">
            تسجيل الدخول
          </h2>
          <form onSubmit={handleLogin}>
            <InputForm label="الايميل او رقم الهاتف" type="email" />
            <InputForm label="كلمة المرور" type="password" />
            <Button text="تسجيل الدخول" onClickAction={handleLogin} />
          </form>
          <div className="flex justify-center display-inline">
            <Link
              to="/forgot-password"
              className="text-blue-500 text-[#161D6F] font-noor-regular underline"
            >
              نسيت كلمة المرور؟
            </Link>
            <p className="text-black font-noor-regular">
              ليس لديك حساب؟
              <Link
                to="/register"
                className="text-blue-500 text-[#6B48FF] font-noor-regular ml-16 underline cursor-pointer"
              >
                إنشاء حساب
              </Link>
            </p>
          </div>
          <div className="relative flex items-center justify-center my-14">
            <span className="absolute flex items-center justify-center font-noor-regular w-12 bg-white px-2 text-[#ACACAC] text-[24px]">
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
    </section>
  );
};

export default LoginPage;
