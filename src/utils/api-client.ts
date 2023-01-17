import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { BASE_API } from 'config/constants';

export const client = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const rtkClient = fetchBaseQuery({
  baseUrl: BASE_API,
});
