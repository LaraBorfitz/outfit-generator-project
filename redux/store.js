import { configureStore } from '@reduxjs/toolkit';
import { api } from './slices/apiSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';

// Creamos el store usando configureStore (reemplaza createStore)
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    api: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
