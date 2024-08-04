import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentuser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentuser = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentuser = null;
    },
  },
});

export const { signInSuccess, signoutSuccess } = userSlice.actions;
export default userSlice.reducer;
