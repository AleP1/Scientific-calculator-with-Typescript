import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromMemory } from '../store/calculatorSlice';

const Memory: React.FC = () => {
  const memory = useSelector((state: RootState) => state.calculator.memory);
  const dispatch = useDispatch();

  const handleRemove = (index: number) => {
    dispatch(removeFromMemory(index));
  };

  if (memory.length === 0) return null;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-4 text-black">
      <h2 className="text-2xl mb-2">Memoria</h2>
      <ul className="space-y-2 max-h-40 overflow-y-auto text-lg">
        {memory.map((item, index) => (
          <li key={index} className="bg-gray-700 p-2 rounded-lg flex justify-between items-center">
            {item}
            <button
              className="ml-4 text-red-500 hover:text-red-700"
              onClick={() => handleRemove(index)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Memory;