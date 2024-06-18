import React from 'react';
import KidsCalculator from '../components/KidsCalculator';
import History from '../components/History';

const KidsCalculatorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-black flex flex-col items-center p-4 animate-slide-in">
      <div className="flex flex-col md:flex-row w-full max-w-7xl space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-grow">
          <KidsCalculator />
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <History />
        </div>
      </div>
    </div>
  );
};

export default KidsCalculatorPage;
