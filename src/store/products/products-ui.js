import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: null,
    fetchingStatus: {
        loading: false,
        skeletonsToShow: 10,
        error: null,
    },
    ctegType: 'all',
};

const productUISlice = createSlice({
    name: 'productUI',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },

        setLoading(state, action) {
            state.fetchingStatus.loading = action.payload;
        },

        setCtegType(state, action) {
            state.ctegType = action.payload;
        },

        setError(state, action) {
            state.fetchingStatus.error = action.payload;
        },
    },
});

export const productUISliceAction = productUISlice.actions;

export default productUISlice.reducer;
