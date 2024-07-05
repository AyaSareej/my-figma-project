import React, { useState, useRef } from "react";

const VerificationCodeInput = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className=" flex justify-center items-center space-x-6 rtl:space-x-reverse">
      {code.map((num, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength="1"
          value={num}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-16 h-16 text-center text-4xl border border-gray-400 rounded-xl font-noor-regular leading-10 bg-[#D9D9D9] "
        />
      ))}
    </div>
  );
};

export default VerificationCodeInput;
