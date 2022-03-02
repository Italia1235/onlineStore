import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => state,
  },
});

export const authReducer = slice.reducer;

export const createUser = () => {};
