import React from 'react';
import { Badge, Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AccordionContainer from './Accordion';
import Buttons from './Buttons';
import BackBtn from '../../../utilities/BackBtn';
import { titleShorter } from '../../../utilities/titleShorter';
import useSkeleton from '../../../hooks/useSkeleton';
import Error from '../../../pages/Error';
import { useEffect } from 'react';

const ProductDetail = () => {
   const { products } = useSelector((state) => state.productUI);
   const { wishlist } = useSelector((state) => state.wishList);
   const { _id } = useParams();
   const navigate = useNavigate();
   const location = useLocation();

   // skeleton
   const { productDetailSkeleton } = useSkeleton();

   // isWishlist
   const isWishlist = (id) => wishlist.some((item) => item.id === id);

   const productToShow = products?.find((item) => item.id === +_id);

   const newItem = {
      id: productToShow?.id,
      title: productToShow?.title,
      image: productToShow?.image,
      price: productToShow?.price,
   };

   //when this component mount
   useEffect(() => window.scrollTo(0, 0), [location]);

   return (
      <>
         {products && !productToShow && <Error />}
         {!products && !productToShow && productDetailSkeleton}
         {productToShow && (
            <Box margin={'auto'} mt='65px' px={5} maxWidth='1000px'>
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
                        {titleShorter(productToShow.title, 3)}
                     </Text>

                     <Flex align={'center'}>
                        <Text me={'2rem'} fontSize='lg'>
                           Price: ${productToShow.price.toFixed(2)}
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

                     <Buttons newItem={newItem} isWishlist={isWishlist} />
                  </VStack>
               </Flex>
            </Box>
         )}
      </>
   );
};

export default ProductDetail;
