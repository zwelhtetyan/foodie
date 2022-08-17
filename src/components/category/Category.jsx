import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { categories } from './categroy-list';

const Category = () => {
   const categoryList = categories;

   const properties = {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase',
      userSelect: 'none',
   };

   const activeState = {
      bg: 'black',
      color: 'white',
   };

   const navigate = useNavigate();
   const location = useLocation();

   const queryParam = new URLSearchParams(location.search);
   let searchTerm = queryParam.get('category')?.toLowerCase() || 'all';

   const chooseCategoryType = (categotyType) => {
      const category = categotyType.toLowerCase();
      navigate(`/?category=${category}`);
   };

   const categroy = categoryList.map((item) => (
      <Box
         width={
            item.content === 'All'
               ? { base: '100%', md: '20%' }
               : { base: '50%', md: '20%' }
         }
         height={{ base: '60px', sm: '100px' }}
         sx={item.content.toLowerCase() === searchTerm && activeState}
         {...properties}
         key={item.id}
         _hover={{
            bg: {
               base: item.content.toLowerCase() !== searchTerm && 'transparent',
               sm: item.content.toLowerCase() !== searchTerm && 'gray.200',
            },
         }}
         onClick={() => chooseCategoryType(item.content)}
      >
         <Text>{item.content}</Text>
      </Box>
   ));

   return (
      <Flex
         justifyContent={'space-around'}
         alignItems='center'
         flexWrap='wrap'
         my={5}
         bg={'gray.100'}
      >
         {categroy}
      </Flex>
   );
};

export default Category;
