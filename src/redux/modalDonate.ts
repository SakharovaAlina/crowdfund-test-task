import { createSlice } from '@reduxjs/toolkit';

export const modalDonateSlice = createSlice({
  name: 'donator',
  initialState: {
    open: null,
  },
  reducers: {
    openDonate: (state, action) => {
      state.open = action.payload;
    },
    closeDonate: (state) => {
      state.open = null;
    },
  },
});

export const { openDonate, closeDonate } = modalDonateSlice.actions;

export default modalDonateSlice.reducer;
