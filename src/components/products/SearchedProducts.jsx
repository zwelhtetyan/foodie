import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';
import { IoCloseOutline } from 'react-icons/io5';
import { searchProductSliceAction } from '../../store/search-product';
import { useAppContext } from '../../context/AppCtx';

const SearchedProducts = () => {
    const { products } = useSelector((state) => state.productUI);
    const dispatch = useDispatch();
    const { isSearch, searchTerm } = useSelector(
        (state) => state.searchProduct
    );

    const { setShowDesktopSearchBar, setShowMobileSearchBar } = useAppContext();

    const displayProducts = () => {
        const filteredProducts = products?.filter((item) =>
            item.title.toLowerCase().includes(searchTerm)
        );

        return filteredProducts?.map((item) => (
            <SingleProduct {...item} key={item.id} />
        ));
    };

    const searchedProducts = displayProducts() || null;

    const handleClose = () => {
        dispatch(searchProductSliceAction.setIsSearch(false));
        window.innerWidth > 992
            ? setShowDesktopSearchBar(false)
            : setShowMobileSearchBar(false);
    };

    return (
        <Box
            display={isSearch ? 'block' : 'none'}
            width={'100%'}
            height={'calc(100vh - 65px)'}
            bg='white'
            pos={'fixed'}
            top={'65px'}
            left={0}
            py={5}
            overflowY='overlay'
        >
            <Heading
                fontWeight={'sm'}
                letterSpacing={1}
                py={3}
                mt={'30px'}
                display='flex'
                alignItems={'center'}
                justifyContent='space-around'
                fontSize={{ base: '25px' }}
            >
                <Text me={3}>Searched Products</Text>
                <IoCloseOutline
                    size={30}
                    cursor='pointer'
                    onClick={handleClose}
                />
            </Heading>

            <Text fontSize={'16px'} textAlign='center' letterSpacing={1} mt={5}>
                {searchedProducts ? 'Results' : 'No result'} for{' '}
                <b> {searchTerm}</b> {searchedProducts ? '.' : '!'}
            </Text>

            <Flex flexWrap={'wrap'} py={5} my={5}>
                {searchedProducts}
            </Flex>
        </Box>
    );
};

export default SearchedProducts;
