import React from "react";

const Input = ({ type, placeholder, className, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} w-full px-7 py-4 border rounded-full focus:ring-2 focus:ring-branded-blue placeholder:text-[#7F7F7F] placeholder:text-xs text-xs`}
      {...rest}
    />
  );
};

export default Input;
