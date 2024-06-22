import React, { useState } from 'react';
import KidsCalculator from '../components/KidsCalculator';
import History from '../components/History';

const KidsCalculatorPage: React.FC = () => {
  const [colorOption, setColorOption] = useState(1);

  const handleColorChange = (option: number) => {
    setColorOption(option);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-black flex flex-col items-center p-4 ">
      <div className="flex justify-center space-x-4 my-4">
        <button onClick={() => handleColorChange(1)} className="px-4 py-2 bg-blue-300 hover:bg-blue-400 rounded-lg shadow-lg">1</button>
        <button onClick={() => handleColorChange(2)} className="px-4 py-2 bg-green-300 hover:bg-green-400 rounded-lg shadow-lg">2</button>
        <button onClick={() => handleColorChange(3)} className="px-4 py-2 bg-pink-300 hover:bg-pink-400 rounded-lg shadow-lg">3</button>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-7xl space-y-6 md:space-y-0 md:space-x-6 bounce-in-top hover:bounce-in-fwd">
        <div className="flex-grow">
          <KidsCalculator colorOption={colorOption} />
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <History />
        </div>
      </div>
    </div>
  );
};

export default KidsCalculatorPage;