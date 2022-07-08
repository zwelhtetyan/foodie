import { useDispatch } from 'react-redux';
import { searchProductSliceAction } from '../store/search-product';

const useSearchProduct = (searchInputRef) => {
    const dispatch = useDispatch();

    const searchProductHandler = (e) => {
        e.preventDefault();
        const searchTerm = searchInputRef.current.value;
        searchInputRef.current.blur(); // showing of mobile keyboard when submit
        dispatch(searchProductSliceAction.setSearchTerm(searchTerm));
        dispatch(searchProductSliceAction.setIsSearch(true));
        searchInputRef.current.value = '';
    };

    return { searchProductHandler };
};

export default useSearchProduct;
