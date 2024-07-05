import React, { useContext } from "react";
import Image from "../assets/images/LogPic.png";
import Button from "../components/buttons/Button.jsx";
import VerificationCodeInput from "../components/VerificationCodeInput.jsx";
import { AuthContext } from "../components/AuthContext.jsx";

const VerifyEmailPage = () => {
  // const { handleCloseVerifyEmailForm } = useContext(AuthContext);
  // const name = "RED";
  // const email = "red1234@gmail.com";
  // const time = " 4:20 ";
  // return (
  //   <div className="fixed inset-0 flex items-center justify-items-center bg-black bg-opacity-50 z-50">
  //     <div className="md:shrink-0 relative flex items-center  justify-center bg-[#0A0E3F] w-[1005px]  h-[688px]  md:ml-96 rounded-[19px] shadow-[2px_2px_30px_-8px_#F2F4F6] overflow-hidden">
  //       <div
  //         className="absolute w-full h-full  bg-right opacity-50"
  //         style={{
  //           backgroundImage: `url(${Image})`,
  //           backgroundPosition: "95% 60%",
  //         }}
  //       />
  //       <div className="absolute flex-col  space-y-8 bg-white w-[645px] h-full left-[360px] rounded-[19px] p-8 opacity-100">
  //       <button onClick={handleCloseVerifyEmailForm} className="absolute top-2 right-2 text-[#0A0E3F]">X</button>
  //         <div className="text-[#0A0E3F] text-[20px] md:text-[34px] font-noor-bold leading-[38px] md:leading-[60px] mt-6 text-center">
  //           <span className="text-[#6B48FF]  font-noor-bold ">{name} </span>
  //           مرحبا بك
  //         </div>
  //         <div className="text-[#0A0E3F] text-[10px] md:text-[22px] font-noor-regular leading-[38px] md:leading-[60px] text-center">
  //           <span className="text-[#6B48FF]  font-noor-regular ">
  //             ({email})
  //           </span>
  //           :لقد تم إرسال رمز التأكيد إلى
  //         </div>
  //         <VerificationCodeInput />
  //         <Button text="تأكيد" onClickAction="confirm" />
  //         <div className="text-[#0A0E3F] text-[10px] md:text-[22px] font-noor-regular leading-[38px] md:leading-[60px] text-center">
  //           <span className="text-[#1877F2]  font-noor-regular ">{time}</span>
  //           إذا لم يصلك الرمز يمكنك المحاولة بعد
  //         </div>
  //         <button className="border border-gray-400 w-[548px] py-[1.5px] rounded-[21px] text-[#0A0E3F] text-[15px] md:text-[24px] font-noor-bold leading-[38px] md:leading-[60px] mt-4 text-center shadow-button">
  //           إعادة الإرسال
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default VerifyEmailPage;
