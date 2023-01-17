import { RootState } from 'store';

import { PromoState } from './types';

export const selectPromo = (state: RootState): PromoState[] => state.promo;
