import { configureStore } from '@reduxjs/toolkit';
import productUIReducer from './products-ui';
import searchProductReducer from './search-product';

const store = configureStore({
    reducer: {
        productUI: productUIReducer,
        searchProduct: searchProductReducer,
    },
});

export default store;
