import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";
import messageReducer from "./messageSlice";

const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

let persistor = persistStore(store);

export { store, persistor };
