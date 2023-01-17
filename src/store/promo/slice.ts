import { createSlice } from '@reduxjs/toolkit';

import { PromoData } from './data';

const initialState = PromoData;

export const promoSlice = createSlice({
  name: 'promoSlice',
  initialState,
  reducers: {
    getAllPromo: (state) => state,
  },
});

export const { getAllPromo } = promoSlice.actions;
export const promoReducer = promoSlice.reducer;
