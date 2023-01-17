import { combineReducers } from '@reduxjs/toolkit';
import { promoApi } from 'services/promo';

import { authReducer } from './auth/slice';
import { promoReducer } from './promo/slice';

export default combineReducers({
  [promoApi.reducerPath]: promoApi.reducer,

  auth: authReducer,
  promo: promoReducer,
});
