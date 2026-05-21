import React from 'react';

const PrimaryButton = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "w-full h-12 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer";
  
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    primaryLight: "bg-blue-300 text-white", // Like when fields are empty
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
