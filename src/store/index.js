import { configureStore } from '@reduxjs/toolkit';
import productUIReducer from './products-ui';
import searchProductReducer from './search-product';
import cartReducer from './cart-slice';
import wishListReducer from './wishlist-slice';

const store = configureStore({
    reducer: {
        productUI: productUIReducer,
        searchProduct: searchProductReducer,
        cart: cartReducer,
        wishList: wishListReducer,
    },
});

export default store;
