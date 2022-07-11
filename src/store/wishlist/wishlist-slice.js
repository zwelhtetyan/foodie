import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishlist: [],
    change: false,
};

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        setWishlist(state, action) {
            state.wishlist = action.payload || [];
        },

        addToWishlist(state, action) {
            const newItem = action.payload;

            const existingItem = state.wishlist.find(
                (item) => item.id === newItem.id
            );

            if (existingItem) {
                state.wishlist = state.wishlist.filter(
                    (item) => item.id !== newItem.id
                );
            } else {
                state.wishlist = [...state.wishlist, newItem];
            }
            state.change = true;
        },

        removeFromWishlist(state, action) {
            state.wishlist = state.wishlist.filter(
                (item) => item.id !== action.payload
            );
            state.change = true;
        },

        clearWishlist(state) {
            state.wishlist = [];
            state.change = true;
        },
    },
});

export const wishListSliceAction = wishListSlice.actions;

export default wishListSlice.reducer;
