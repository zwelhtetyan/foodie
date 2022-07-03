import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../assets/image/slide1.jpg';
import slide2 from '../assets/image/slide2.jpg';
import slide3 from '../assets/image/slide3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const HeroSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: false,
    };
    return (
        <Box sx={{ height: '500px' }} overflow='hidden'>
            <Slider {...settings}>
                {/* <Box>
                    <Image src={slide1} objectFit='cover'/>
                </Box> */}

                <Box
                    bgImg={slide1}
                    width='100%'
                    height='500'
                    backgroundPosition='center'
                    backgroundSize='cover'
                ></Box>
                <Box
                    bgImg={slide2}
                    width='100%'
                    height='500'
                    backgroundPosition='center'
                    backgroundSize='cover'
                ></Box>
                <Box
                    bgImg={slide3}
                    width='100%'
                    height='500'
                    backgroundPosition='center'
                    backgroundSize='cover'
                ></Box>
            </Slider>
        </Box>
    );
};

export default HeroSlider;
