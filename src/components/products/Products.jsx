import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSkeleton from '../../hooks/useSkeleton';
import fetchProductData from '../../store/products-action';
import Category from '../category/Category';
import SingleProduct from './SingleProduct';

const Products = () => {
    const dispatch = useDispatch();
    const { products, fetchingStatus, ctegType } = useSelector(
        (state) => state.productUI
    );

    let categotyType = ctegType.toLowerCase();

    // eslint-disable-next-line array-callback-return
    const productsToDisplay = products?.filter((item) => {
        if (categotyType === 'all') {
            return item;
        }

        if (categotyType === 'men') {
            categotyType = "men's clothing";
        }

        if (categotyType === 'women') {
            categotyType = "women's clothing";
        }

        if (categotyType === item.category) {
            return item;
        }
    });

    const displayProducts = (
        <>
            {productsToDisplay?.map((item) => (
                <SingleProduct {...item} key={item.id} />
            ))}
        </>
    );

    const errorContent = (
        <>
            {fetchingStatus.error && !fetchingStatus.loading && !products && (
                <VStack height={'100px'} justifyContent='center'>
                    <Text textAlign='center' letterSpacing={2} fontSize={'lg'}>
                        {fetchingStatus.error}
                    </Text>
                    <Button
                        m={'auto'}
                        display='block'
                        fontWeight={'medium'}
                        colorScheme='green'
                        onClick={() => dispatch(fetchProductData('all', 10))}
                    >
                        Try Again
                    </Button>
                </VStack>
            )}
        </>
    );

    const { productSkeletonArr } = useSkeleton(fetchingStatus.skeletonsToShow);

    return (
        <>
            {errorContent}
            {products && !fetchingStatus.loading && (
                <>
                    <Category />
                    <Flex flexWrap={'wrap'} py={3}>
                        {displayProducts}
                    </Flex>
                </>
            )}
            {fetchingStatus.loading && (
                <Flex flexWrap={'wrap'} mt={5}>
                    {productSkeletonArr}
                </Flex>
            )}
        </>
    );
};

export default Products;
