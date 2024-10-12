import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../postsAPI/postApi'
import { setupListeners } from '@reduxjs/toolkit/query';
import { commentApi } from '../commentAPI/commentApi';
import { userApi } from '../userAPI/userApi';
// import { userApi } from '../userAPI/userAPI';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]:postApi.reducer,
    [commentApi.reducerPath]:commentApi.reducer,
    [userApi.reducerPath]:userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware,commentApi.middleware),
})
setupListeners(store.dispatch); // 