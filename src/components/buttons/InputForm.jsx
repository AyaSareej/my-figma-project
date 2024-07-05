import React from 'react';

const InputForm = ({ label, type }) => {
  return (
    <div className="relative mb-10 h-[60px] md:w-[550px] sm:w-[350px]">
      <label className=" bg-[#FFFFFF]  text-[#000000] font-noor-regular text-[18px] leading-[21.6px] text-right absolute " style={{ top: '-20px',  padding: '10px', right: '20px'}}>
        {label}
      </label>
      <input
        type={type}
        className=" md:w-[550px] sm:w-[350px] h-[60px] border border-[#000000] rounded-[20px] focus:outline-none p-2"
        style={{ top: '25px', opacity: '1' }}
      />
    </div>
  );
};

export default InputForm;
