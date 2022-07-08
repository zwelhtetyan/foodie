import { Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { useAppContext } from '../../context/AppCtx';
import useSearchProduct from '../../hooks/useSearchProduct';

const DesktopSearchBar = () => {
    const { showDesktopSearchBar } = useAppContext();

    const searchInputRef = useRef();

    showDesktopSearchBar && searchInputRef.current.focus();

    const { searchProductHandler } = useSearchProduct(searchInputRef);

    return (
        <form onSubmit={searchProductHandler}>
            <Input
                ref={searchInputRef}
                variant='flushed'
                placeholder='Search Products'
                _focus={{
                    boxShadow: '0px 1px 0px 0px #000',
                    borderColor: '#000',
                }}
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

export default DesktopSearchBar;
