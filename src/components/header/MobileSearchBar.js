import React, { useRef } from 'react';
import { Input, VStack } from '@chakra-ui/react';
import useSearchProduct from '../../hooks/useSearchProduct';

const MobileSearchBar = ({ showMobileSearchBar }) => {
  const searchInputRef = useRef();

  showMobileSearchBar && searchInputRef.current.focus();

  const { searchProductHandler } = useSearchProduct(searchInputRef);

  return (
    <VStack
      pos={'fixed'}
      backgroundColor='whiteAlpha.700'
      backdropFilter={'blur(5px)'}
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
          borderColor={'black'}
          h={30}
          width={'90%'}
        />
      </form>
    </VStack>
  );
};

export default React.memo(MobileSearchBar);
