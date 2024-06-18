import React from 'react';
import ScientificCalculator from '../components/ScientificCalculator';
import History from '../components/History';
import Memory from '../components/Memory';

const ScientificCalculatorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-black flex flex-col items-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-grow">
          <ScientificCalculator />
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <History />
          <Memory />
        </div>
      </div>
    </div>
  );
};

export default ScientificCalculatorPage;
