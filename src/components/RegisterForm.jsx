import React from "react";
import Image from "../assets/images/LogPic.png";
import GoogleImage from "../assets/icons/GoogleLogo.png";
import AppleImage from "../assets/icons/AppleLogo.png";
import FacebookImage from "../assets/icons/FacebookLogo.png";
import InputForm from "../components/buttons/InputForm";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinksButtons";
import ImageUpload from "../components/FileUpload";

const RegisterForm = ({ isVisible, onClose }) => {

  if (!isVisible) return null;

  // const handleRegister = () => {
  //   onClose();
  //   navigate("/verify-email"); // Navigate to verify email page after registration
  // };

  // const handleLoginClick = () => {
  //   onClose();
  //   navigate("/login");
  // };

  return (
    <div className="fixed flex  md:shrink-0  justify-end items-end top-[100px] right-0 w-[1980px] h-[900px]  z-50">
      <div
        className="absolute w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      />
      <div className="absolute  flex-col bg-white h-full w-auto right-0 rounded-[19px] p-10 ">
        <h2 className="flex justify-center text-[#0A0E3F] text-[20px] md:text-[34px] font-noor-bold leading-[38px] md:leading-[60px]  text-center mb-[20px]">
          إنشاء حساب
        </h2>

        <div className="mx-36 flex justify-around items-end ">
          <div className="w-[550px] flex-col justify-between mr-16 ">
            <ImageUpload label="الصورة الشخصية" maxSize="2 MB" />
            <ImageUpload label="اثبات شخصية" maxSize="1 MB" />
            {/* <Button text="إنشاء حساب" onClick={handleRegister} /> */}
            <p className="text-black font-noor-regular mt-4 flex justify-end ">
              {/* <a
                onClick={handleLoginClick}
                className="text-[#6B48FF] font-noor-regular mr-1 underline cursor-pointer"
              >
                تسجيل الدخول
              </a> */}
              لديك حساب؟
            </p>
          </div>

          <div className="w-[550px] h-[500px]">
            <form>
              <InputForm label="الايميل" type="email" />
              <InputForm label="اسم المستخدم" type="text" />
              <InputForm label="رقم الهاتف" type="text" />
              <InputForm label="كلمة المرور" type="password" />
              <InputForm label="كلمة المرور" type="password" />
            </form>
          </div>
        </div>
        <div className="relative flex items-center justify-center my-14">
          <span className="absolute flex items-center justify-center font-noor-regular w-12 bg-white px-2 text-[#ACACAC] text-[24px]  ">
            أو
          </span>
          <hr className="w-[539px] bg-[#D9D9D9] h-[1px]" />
        </div>
        <div className="mt-6 flex justify-center gap-16">
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
  );
};

export default RegisterForm;
