import { configureStore } from '@reduxjs/toolkit';
import supermarketSlice from '../reducers/supermarket/supermarket.reducer';

export const store = configureStore({
  reducer: {
    supermarket: supermarketSlice.reducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;