import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSearch: false,
    searchTerm: '',
};

const searchProductSlice = createSlice({
    name: 'search-product',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },

        setIsSearch(state, action) {
            state.isSearch = action.payload;
        },
    },
});

export const searchProductSliceAction = searchProductSlice.actions;

export default searchProductSlice.reducer;
