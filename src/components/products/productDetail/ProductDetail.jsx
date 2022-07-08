import React from 'react';
import { Badge, Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AccordionContainer from './Accordion';
import Buttons from './Buttons';
import BackBtn from '../../../utilities/BackBtn';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { products } = useSelector((state) => state.productUI);

    const findProduct = products?.filter((item) => item.id === +id);

    const productToShow = findProduct && findProduct[0];

    //cuz title is so fucking long , i can't feel it :)
    const titleShoter = (title) => title.split(' ').slice(0, 5).join(' ');

    //when this component mount
    window.scrollTo(0, 0);

    return (
        <>
            {productToShow && (
                <Box
                    margin={'auto'}
                    mt='65px'
                    height={{ base: 'auto', md: 'calc(100vh - 65px)' }}
                    px={5}
                    maxWidth='1200px'
                >
                    <Box marginTop={'6rem !important'}>
                        <BackBtn onBack={() => navigate(-1)} />
                    </Box>
                    <Flex
                        marginTop={'2rem !important'}
                        marginBottom={'2rem'}
                        flexDirection={['column', 'column', 'row']}
                        align='center'
                    >
                        <Flex
                            width={{ base: '100%', md: '50%' }}
                            overflow='hidden'
                            align={'center'}
                            justify={'center'}
                        >
                            <Image src={productToShow.image} width='60%' />
                        </Flex>
                        <VStack
                            width={{ base: '100%', md: '50%' }}
                            align='start'
                            mt={{ base: '2.5rem', md: '0' }}
                        >
                            <Text fontSize={'2xl'} fontWeight='bold'>
                                {titleShoter(productToShow.title)}
                            </Text>
                            <Flex align={'center'}>
                                <Text me={'2rem'} fontSize='lg'>
                                    Price: ${productToShow.price}
                                </Text>
                                <Badge
                                    variant='solid'
                                    bg={'black'}
                                    color='white'
                                    rounded={'sm'}
                                    px={1.5}
                                >
                                    Rating : {productToShow.rating.rate}
                                </Badge>
                            </Flex>
                            <Text fontSize='lg'>
                                Availability: {''}
                                <Badge variant={'outline'} colorScheme='green'>
                                    In Stock
                                </Badge>
                            </Text>

                            <AccordionContainer
                                description={productToShow.description}
                            />

                            <Buttons quantity={productToShow.quantity} />
                        </VStack>
                    </Flex>
                </Box>
            )}
        </>
    );
};

export default ProductDetail;
