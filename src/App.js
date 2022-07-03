import React from 'react';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';
import HeroSlider from './components/Carousel';

const App = () => {
    return (
        <Box maxWidth={'2400px'} m='auto'>
            <Header />
            <HeroSlider />
        </Box>
    );
};

export default App;
