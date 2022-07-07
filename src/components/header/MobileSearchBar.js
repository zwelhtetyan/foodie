import React, { useRef } from 'react';
import { Input, VStack } from '@chakra-ui/react';
import { searchProductSliceAction } from '../../store/search-product';
import { useDispatch } from 'react-redux';
import { useAppContext } from '../../context/AppCtx';

const MobileSearchBar = () => {
    const { showMobileSearchBar } = useAppContext();

    const dispatch = useDispatch();
    const searchInputRef = useRef();

    showMobileSearchBar && searchInputRef.current.focus();

    const searchProductHandler = (e) => {
        e.preventDefault();
        const searchTerm = searchInputRef.current.value;
        searchInputRef.current.blur(); // showing of mobile keyboard when submit
        dispatch(searchProductSliceAction.setSearchTerm(searchTerm));
        dispatch(searchProductSliceAction.setIsSearch(true));
        searchInputRef.current.value = '';
    };

    return (
        <VStack
            pos={'fixed'}
            backgroundColor='blackAlpha.800'
            backdropFilter={'blur(5px)'}
            color='white'
            top={showMobileSearchBar ? '65px' : 0}
            zIndex={showMobileSearchBar ? 1 : -1}
            left={0}
            width='100%'
            height={'50px'}
            justifyContent='center'
            display={{ base: 'flex', lg: 'none' }}
        >
            <form
                onSubmit={searchProductHandler}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Input
                    ref={searchInputRef}
                    variant='flushed'
                    placeholder='Search Products'
                    _placeholder={{ color: 'whiteAlpha.500' }}
                    _focus={{
                        boxShadow: '0px 1px 0px 0px #fff',
                        borderColor: '#fff',
                    }}
                    borderColor={'#fff'}
                    h={30}
                    width={'90%'}
                />
            </form>
        </VStack>
    );
};

export default MobileSearchBar;
