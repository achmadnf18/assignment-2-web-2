import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: { user: null },
  reducers: {
    login: (state, action) => ({
      user: action.payload,
    }),
    loginSocial: (state, action) => ({
      user: action.payload,
    }),
    logout: () => ({ user: null }),
  },
});

export const { login, logout, loginSocial } = authSlice.actions;
export const authReducer = authSlice.reducer;
