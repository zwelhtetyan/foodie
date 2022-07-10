import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;

            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );

            if (existingItem) {
                state.cartItems = state.cartItems.map((item) =>
                    item.id === newItem.id
                        ? {
                              ...item,
                              quantity: item.quantity + newItem.quantity,
                              totalPrice:
                                  item.price *
                                  (item.quantity + newItem.quantity),
                          }
                        : item
                );
            } else {
                state.cartItems = [...state.cartItems, newItem];
            }
        },

        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },

        addQuantity(state, action) {
            state.cartItems = state.cartItems.map((item) =>
                item.id === action.payload
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                          totalPrice: item.price * (item.quantity + 1),
                      }
                    : item
            );
        },

        removeQuantity(state, action) {
            const itemArr = state.cartItems.map((item) =>
                item.id === action.payload
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                          totalPrice: item.price * (item.quantity - 1),
                      }
                    : item
            );

            state.cartItems = itemArr.filter((item) => item.quantity > 0);
        },

        clearCart(state) {
            state.cartItems = [];
        },
    },
});

export const cartSliceAction = cartSlice.actions;

export default cartSlice.reducer;
