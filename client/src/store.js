import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";

//persist our store dependencis
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//combine all reducer
const reducers = combineReducers({
  user: userSlice,
  [appApi.reducerPath]: appApi.reducer,
});

//persist configure
const persistConfig = {
  key: "root",
  storage,
  blacklist: [appApi.reducerPath],
};

//creating persistedReducer
const persistedReducer = persistReducer(persistConfig, reducers);

//creating store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware],
});

export default store;
