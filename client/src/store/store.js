import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import searchProductsReducer from './searchProductsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filtersReducer from './filtersSlice';
import modalReducer from './modalSlice';

const storeReducer = combineReducers({
    cart: cartReducer,
});

const persistConfig = {
    key: 'postil',
    storage,
};

const persistedReducer = persistReducer(persistConfig, storeReducer);

const store = configureStore({
    reducer: {
        store: persistedReducer,
        searchProducts: searchProductsReducer,
        filters: filtersReducer,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;
