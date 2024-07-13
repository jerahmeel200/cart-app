import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const existingItem = state.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const existingItem = state.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    }
  }
});

export const { add, remove, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Selector to calculate subtotal
export const selectSubtotal = state =>
  state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
