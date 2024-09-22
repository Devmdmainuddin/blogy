import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../postsAPI/postApi'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]:postApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})
setupListeners(store.dispatch); // 