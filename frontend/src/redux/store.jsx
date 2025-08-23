import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import { userApi } from "./slices/UserApi";
import { reviewApi } from "./slices/ReviewApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware,reviewApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
