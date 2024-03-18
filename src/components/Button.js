import React from 'react';

const buttonColorClasses = {
  blue: "bg-blue-500 hover:bg-blue-700",
  green: "bg-green-500 hover:bg-green-700",
  red: "bg-red-500 hover:bg-red-700",
  yellow: "bg-yellow-500 hover:bg-yellow-700",
  pink: "bg-pink-500 hover:bg-pink-700",
};

const Button = ({ onClick, text, color }) => {
  const colorClasses = buttonColorClasses[color] || buttonColorClasses.blue;
  
  const buttonClasses = `m-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${colorClasses}`;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      {text}
    </button>
  );
};

export default Button;
