import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchPhrases: '',
    searchProducts: [],
};

const searchProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts(state, action) {
            state.searchProducts = action.payload;
        },
        setSearchPhrases(state, action) {
            state.searchPhrases = action.payload;
        },
        resetSearch(state) {
            state.searchPhrases = '';
            state.searchProducts = [];
        },
    },
});

export const { loadProducts, setSearchPhrases, resetSearch } = searchProductsSlice.actions;

export default searchProductsSlice.reducer;
