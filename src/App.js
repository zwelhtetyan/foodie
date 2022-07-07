import React, { useEffect } from 'react';
import Header from './components/header/Header';
import { Box } from '@chakra-ui/react';
import HeroSlider from './components/carousel/Carousel';
import { useDispatch } from 'react-redux';
import fetchProductData from './store/products-action';
import Products from './components/products/Products';
import SearchedProducts from './components/products/SearchedProducts';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    return (
        <Box maxWidth={'2400px'} m='auto'>
            <Header />
            <HeroSlider />
            <Products />
            <SearchedProducts />
        </Box>
    );
};

export default App;
