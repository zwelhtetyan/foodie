import { useDispatch } from 'react-redux';
import { useAppContext } from '../context/AppCtx';
import { searchProductSliceAction } from '../store/search-product';

const useCloseSearch = () => {
    const { setShowDesktopSearchBar, setShowMobileSearchBar } = useAppContext();

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(searchProductSliceAction.setIsSearch(false));
        window.innerWidth > 992
            ? setShowDesktopSearchBar(false)
            : setShowMobileSearchBar(false);
    };

    return handleClose;
};

export default useCloseSearch;
