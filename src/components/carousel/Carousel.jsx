import React from 'react';
import { Badge, Box, Flex, Heading, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slideToShow } from './slide-data';

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    const bgProperties = {
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <Box height={['calc(100vh - 65px)']} overflow='hidden' mt={'65px'}>
            <Slider {...settings}>
                {slideToShow.map((item) => (
                    <Box
                        bgImg={item.slide}
                        sx={bgProperties}
                        height={['calc(100vh - 65px)']}
                        alignItems={'center'}
                        key={item.slide}
                    >
                        <Flex
                            width={'100%'}
                            h='100%'
                            alignItems={'center'}
                            justifyContent={item.pos}
                        >
                            <VStack
                                bg={{
                                    base: 'whiteAlpha.800',
                                    sm: 'transparent',
                                }}
                                w={['90%', '70%', '60%', '50%']}
                                textAlign='center'
                                mt={['25rem', '15rem']}
                                pt='2'
                            >
                                <Badge
                                    bg='black'
                                    color={'white'}
                                    rounded='md'
                                    alignSelf={'start'}
                                    ms={['2rem', '3rem']}
                                >
                                    {item.badge}
                                </Badge>
                                <Heading
                                    as='h1'
                                    size={['2xl', '4xl']}
                                    fontWeight={'500'}
                                    color='black'
                                    p={2}
                                >
                                    {item.content}
                                </Heading>
                            </VStack>
                        </Flex>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default HeroSlider;
