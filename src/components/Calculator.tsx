import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { appendInput, setInput, clearInput, removeLastInput, addToHistory, addToMemory } from '../store/calculatorSlice';
import Button from './Button';
import Display from './Display';

const Calculator: React.FC = () => {
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
        if (result !== Error) {
        dispatch(addToHistory(input + ' = ' + result));
        dispatch(setInput(result.toString()));
        }else{
          dispatch(setInput('Intenta otra operación'));
        }
      } catch (error) {
        dispatch(setInput('Error'));
      }
    } else if (value === 'M+') {
      dispatch(addToMemory());
    } else {
      dispatch(appendInput(value));
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
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

  return (
    <div className="max-w-md w-full mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
      <Display value={input} />
      <div className="grid grid-cols-4 gap-4 text-black">
        {['7', '8', '9', 'DEL', '4', '5', '6', '/', '1', '2', '3', '*', '0', '.', '=', '+', 'C', '-', '(', ')', 'M+'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;