import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './features/apiSlice'
import authSliceReducer from './authSlice/authSlice'
import cartReducer from './cartSlice/cartSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth:authSliceReducer,
    cart:cartReducer
  },
  middleware:(getDefaultMiddleware) =>(getDefaultMiddleware().concat(apiSlice.middleware)),
})

setupListeners(store.dispatch)