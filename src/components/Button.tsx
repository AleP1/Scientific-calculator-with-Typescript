import React from 'react';

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, className }) => {
  return (
    <button
      className={`bg-gray-700 hover:bg-gray-600 text-white rounded-lg ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;