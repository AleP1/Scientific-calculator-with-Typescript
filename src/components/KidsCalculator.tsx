import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { appendInput, setInput, clearInput, removeLastInput, addToHistory } from '../store/calculatorSlice';
import Button from './Button';
import Display from './Display';

interface KidsCalculatorProps {
  colorOption: number;
  className?: string;
}

const KidsCalculator: React.FC<KidsCalculatorProps> = ({ colorOption }) => {
  const input = useSelector((state: RootState) => state.calculator.input);
  const dispatch = useDispatch();

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      dispatch(clearInput());
    } else if (value === 'DEL') {
      dispatch(removeLastInput());
    } else if (value === '=') {
      try {
        const result = eval(input); // Nota: eval no es seguro para producción
        dispatch(addToHistory(input + ' = ' + result));
        dispatch(setInput(result.toString()));
      } catch (error) {
        dispatch(setInput('Error'));
      }
    } else {
      dispatch(appendInput(value));
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
      dispatch(appendInput(key));
    } else if (key === 'Enter') {
      handleButtonClick('=');
    } else if (key === 'Backspace') {
      dispatch(removeLastInput());
    } else if (key === 'Escape') {
      dispatch(clearInput());
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  let bgClass = 'bg-gradient-to-r from-pink-200 via-yellow-200 to-green-200';
  if (colorOption === 2) {
    bgClass = 'bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200';
  } else if (colorOption === 3) {
    bgClass = 'bg-gradient-to-r from-orange-200 via-red-200 to-yellow-200';
  }

  return (
    <div className={`max-w-md w-full mx-auto ${bgClass} p-6 rounded-lg shadow-lg space-y-4`}>
      <Display value={input} className="text-3xl" />
      <div className="grid grid-cols-4 gap-4 text-black">
        {['7', '8', '9', 'DEL', '4', '5', '6', '/', '1', '2', '3', '*', '0', '.', '=', '+', 'C', '-'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} className="text-2xl bg-blue-300 hover:bg-blue-400 p-4 rounded-full shadow-lg" />
        ))}
      </div>
    </div>
  );
};

export default KidsCalculator;
