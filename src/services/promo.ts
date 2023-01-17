import { Pagination } from '@lucasmogari/react-pagination/dist/src/types';
import { createApi } from '@reduxjs/toolkit/query/react';
import { rtkClient } from 'utils/api-client';

export type Promos = {
  id: string;
  shortId: string;
  merchantId: string;
  merchantLogo: string;
  background: string;
  titleRow1: string;
  titleRow2: string;
  titleBold: number;
  color: string;
  isHot: boolean;
  showBorder: boolean;
  cardLogo: string;
  isLoved: boolean;
  createdDate: string;
  startDate: string;
  endDate: string;
  locationName: string;
  distance: string;
  merchantPopularityRank: number;
  totalLovers: number;
  showCard: boolean;
  merchantCategory: string[];
  tags: string[];
  additionalTags?: string[];
  validDay: string;
  validDate?: string;
  merchantName: string;
  isHidden: boolean;
};
export type PromosFilter = { limit?: number; page?: number; search?: string };

export const promoApi = createApi({
  reducerPath: 'promoApi',
  tagTypes: ['Promo'],
  baseQuery: rtkClient,
  endpoints: (build) => ({
    allPromos: build.query<{ items: Promos[]; pagination: Pagination }, PromosFilter>({
      query: (params) => ({
        url: '/promo/list',
        params: { ...params },
      }),
    }),
    detailPromos: build.query<Promos, string>({
      query: (id) => `/promo/${id}`,
    }),
  }),
});

export const { useAllPromosQuery, useDetailPromosQuery } = promoApi;
