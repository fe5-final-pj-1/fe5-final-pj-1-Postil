import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filtersQuery: {
        perPage: ['12'],
        startPage: ['1'],
    },
    filtersChecked: false,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersAdded(state, action) {
            state.filtersQuery = { ...state.filtersQuery, ...action.payload };
            if (Object.keys(state.filtersQuery).length > 2) {
                state.filtersChecked = true;
            }
        },
        filtersRemoved(state, action) {
            state.filtersQuery = action.payload;
            if (Object.keys(action.payload).length < 3) {
                state.filtersChecked = false;
            }
        },
        filtersRemovedAll(state) {
            return {
                filtersQuery: {
                    perPage: state.filtersQuery.perPage,
                    startPage: state.filtersQuery.startPage,
                },
                filtersChecked: false,
            };
        },
    },
});

export const { filtersAdded, filtersRemoved, filtersRemovedAll } = filtersSlice.actions;

export default filtersSlice.reducer;
