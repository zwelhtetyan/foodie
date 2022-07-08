import React, { useEffect } from 'react';
import Header from './components/header/Header';
import { Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import fetchProductData from './store/products-action';
import SearchedProducts from './components/products/SearchedProducts';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/products/productDetail/ProductDetail';
import Home from './pages/Home';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    return (
        <Box>
            <Header />
            <SearchedProducts />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products/:id' element={<ProductDetail />} />
            </Routes>
        </Box>
    );
};

export default App;
