import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  input: string;
  history: string[];
  memory: string[];
}

const initialState: CalculatorState = {
  input: '',
  history: [],
  memory: [],
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    appendInput: (state, action: PayloadAction<string>) => {
      state.input += action.payload;
    },
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    clearInput: (state) => {
      state.input = '';
    },
    removeLastInput: (state) => {
      state.input = state.input.slice(0, -1);
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
    addToMemory: (state) => {
      if (state.input) {
        state.memory.push(state.input);
      }
    },
    removeFromHistory: (state, action: PayloadAction<number>) => {
      state.history.splice(action.payload, 1);
    },
    removeFromMemory: (state, action: PayloadAction<number>) => {
      state.memory.splice(action.payload, 1);
    },
  },
});

export const {
  appendInput,
  setInput,
  clearInput,
  removeLastInput,
  addToHistory,
  addToMemory,
  removeFromHistory,
  removeFromMemory,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;