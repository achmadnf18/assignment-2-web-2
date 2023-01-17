import { RootState } from 'store';

import { AuthState, User } from './types';

export const selectAuth = (state: RootState): AuthState => state.auth;

export const selectAuthUser = (state: RootState): User => state.auth.user;
