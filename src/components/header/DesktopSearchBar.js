import { Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAppContext } from '../../context/AppCtx';
import { searchProductSliceAction } from '../../store/search-product';

const DesktopSearchBar = () => {
    const { showDesktopSearchBar } = useAppContext();

    const dispatch = useDispatch();

    const searchInputRef = useRef();

    showDesktopSearchBar && searchInputRef.current.focus();

    const searchProductHandler = (e) => {
        e.preventDefault();
        const searchTerm = searchInputRef.current.value;
        searchInputRef.current.blur(); // showing of mobile keyboard when submit
        dispatch(searchProductSliceAction.setSearchTerm(searchTerm));
        dispatch(searchProductSliceAction.setIsSearch(true));
        searchInputRef.current.value = '';
    };

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
