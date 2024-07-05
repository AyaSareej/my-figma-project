import React, { useState } from "react";
import UploadIcon from "../assets/icons/UploadIcon.png"; // Ensure you have this icon

const ImageUpload = ({ label, maxSize }) => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative flex flex-col items-end mb-10">
      {/* Label with gradient background */}
      <div className="absolute top-[-16px] right-4 px-2" style={{ background: 'linear-gradient(to bottom, white 70%, #E1DAFF 30%)' }}>
        <span className="text-black font-noor-regular text-[18px] leading-[21.6px] text-right">
          {label}
        </span>
      </div>
      <div
        className="w-[551px] h-[149.74px] border-2 border-dashed border-[#161D6F] rounded-xl flex items-center justify-end text-black cursor-pointer bg-[#6B48FF33] p-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("fileInput").click()}
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="object-cover w-full h-full rounded-lg"
          />
        ) : (
          <div className="flex items-center">
            <img
              src={UploadIcon}
              alt="Upload"
              className="w-[60px] h-[60px] mb-5 mr-12"
            />
            <div className="flex flex-col items-end">
              <span className="font-noor-regular text-[18px] leading-[21.6px] text-right">
                اسحب و افلت الصورة هنا أو قم برفعها من الملفات
              </span>
              <span className="text-[#5F5F5F] mt-2 font-noor-regular text-[18px] leading-[21.6px] text-right mt-6">
                {maxSize} :الحجم الأقصى
              </span>
            </div>
          </div>
        )}
      </div>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
};

export default ImageUpload;
