import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, onClickAction }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    switch (onClickAction) {
      case "register":
        navigate("/verify-email");
        break;
      case "login":
        navigate("/");
        break;
      case "confirm":
        navigate("/");
        break;
      // Add more cases for other actions as needed
      default:
        break;
    }
  };

  return (
    <button
      className="bg-[#1EE3CF] w-[548px] py-[1.5px] rounded-[21px] text-[#0A0E3F] text-[15px] md:text-[24px] font-noor-bold leading-[38px] md:leading-[60px] mt-4 text-center"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
