import React from "react";
import PropTypes from "prop-types";

const LinkButton = ({ label, imageUrl, textColor, backgroundColor }) => {
  return (
    <button
      className={`bg-${backgroundColor} text-${textColor} text-[24px] py-2 px-4 rounded-2xl h-[60px] font-Roboto shadow-[0px_2px_20px_-14px_rgba(0,0,0,1)]`}
    >
      <div className="flex items-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={label}
            className="md:w-[35px] h-[36.5px] mr-2"
          />
        )}
        {label}
      </div>
    </button>
  );
};

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default LinkButton;
