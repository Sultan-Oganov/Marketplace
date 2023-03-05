import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './slices/userSlice';
import basketSlice from './slices/basketSlice';
import { productsAPI } from './api/productsAPI';
import snackbarSlice from './slices/snackbarSlice';

const rootReducer = combineReducers({
  user: userSlice,
  basket: basketSlice,
  snackbar: snackbarSlice,
  [productsAPI.reducerPath]: productsAPI.reducer,
});
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [productsAPI.reducerPath, 'snackbar'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsAPI.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
