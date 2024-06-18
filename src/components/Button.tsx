import React from 'react';

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <button 
      className="p-4 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400 active:bg-gray-500 transition-colors duration-200 text-lg text-black"
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;