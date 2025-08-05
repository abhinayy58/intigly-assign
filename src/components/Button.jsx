import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
