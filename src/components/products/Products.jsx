import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useSkeleton from '../../hooks/useSkeleton';
import fetchProductData from '../../store/products/products-action';
import Category from '../category/Category';
import SingleProduct from './SingleProduct';

const Products = () => {
   const dispatch = useDispatch();
   const { products, fetchingStatus } = useSelector((state) => state.productUI);

   const wishlists = useSelector((state) => state.wishList.wishlist);

   const location = useLocation();

   const queryParam = new URLSearchParams(location.search);
   let searchTerm = queryParam.get('category')?.toLowerCase() || 'all';

   // eslint-disable-next-line array-callback-return
   const productsToDisplay = products?.filter((item) => {
      if (searchTerm === 'all') {
         return item;
      }

      if (searchTerm === 'men') {
         searchTerm = "men's clothing";
      }

      if (searchTerm === 'women') {
         searchTerm = "women's clothing";
      }

      if (searchTerm === item.category) {
         return item;
      }
   });

   const displayProducts = (
      <>
         {productsToDisplay?.map((item) => (
            <SingleProduct {...item} key={item.id} wishlists={wishlists} />
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
      <Box maxWidth={'1200px'} m='auto'>
         {errorContent}
         {fetchingStatus.loading && (
            <Flex flexWrap={'wrap'} mt={5}>
               {productSkeletonArr}
            </Flex>
         )}
         {products && !fetchingStatus.loading && (
            <>
               <Category />
               <Flex flexWrap={'wrap'} py={3}>
                  {displayProducts}
               </Flex>
            </>
         )}
      </Box>
   );
};

export default React.memo(Products);
