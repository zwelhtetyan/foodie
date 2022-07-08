import React, { useRef } from 'react';
import { Input, VStack } from '@chakra-ui/react';
import { useAppContext } from '../../context/AppCtx';
import useSearchProduct from '../../hooks/useSearchProduct';

const MobileSearchBar = () => {
    const { showMobileSearchBar } = useAppContext();

    const searchInputRef = useRef();

    showMobileSearchBar && searchInputRef.current.focus();

    const { searchProductHandler } = useSearchProduct(searchInputRef);

    return (
        <VStack
            pos={'fixed'}
            backgroundColor='blackAlpha.800'
            backdropFilter={'blur(5px)'}
            color='white'
            transition={'.2s'}
            top={showMobileSearchBar ? '65px' : 0}
            zIndex={showMobileSearchBar ? 2 : -1}
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
