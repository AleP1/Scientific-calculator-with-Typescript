import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md text-right text-4xl mb-4 text-black">
      {value}
    </div>
  );
};

export default Display;