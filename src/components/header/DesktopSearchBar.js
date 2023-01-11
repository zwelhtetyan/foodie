import { Input } from '@chakra-ui/react';
import React, { useRef } from 'react';
import useSearchProduct from '../../hooks/useSearchProduct';

const DesktopSearchBar = ({ showDesktopSearchBar }) => {
  const searchInputRef = useRef();

  showDesktopSearchBar && searchInputRef.current.focus();

  const { searchProductHandler } = useSearchProduct(searchInputRef);

  return (
    <form onSubmit={searchProductHandler}>
      <Input
        ref={searchInputRef}
        variant='flushed'
        placeholder='Search Products'
        opacity={showDesktopSearchBar ? 1 : 0}
        borderColor={'black'}
        h={30}
        width={'400px'}
        mb={1}
        display={{ base: 'none', lg: 'block' }}
      />
    </form>
  );
};

export default React.memo(DesktopSearchBar);
