import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice/cartSlice';
import searchProductsReducer from './searchProductsSlice/searchProductsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filtersReducer from './filtersSlice/filtersSlice';
import modalReducer from './modalSlice/modalSlice';
import loginReducer from './loginSlice/loginSlice';
import orderReducer from './orderSlice/orderSlice';

const storeReducer = combineReducers({
    cart: cartReducer,
    login: loginReducer,
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
        order: orderReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;
