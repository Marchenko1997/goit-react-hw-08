import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    }),
});

export const persistor = persistStore(store);
