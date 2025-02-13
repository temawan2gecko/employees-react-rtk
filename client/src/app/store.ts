import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { api } from './services/api'
import auth from '../features/auth/authSlice'
import employees from '../features/employees/employessSlice'
import { listenerMiddleware } from '../middleware/auth';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: auth,
    employees: employees
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;