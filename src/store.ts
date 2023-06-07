import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// Slice Reducer
import appReducer from "./features/appSlice";

// Services
import { bitcoinApi } from "./services/app";

export const store = configureStore({
  reducer: {
    [bitcoinApi.reducerPath]: bitcoinApi.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bitcoinApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
