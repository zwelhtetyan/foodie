import { productUISliceAction } from './products-ui';

const fetchProductData = () => {
   // console.log('fetching product data');
   return (dispatch) => {
      dispatch(productUISliceAction.setLoading(true));

      const fetchPdoductData = async () => {
         const response = await fetch('https://fakestoreapi.com/products/', {
            headers: { 'Access-Control-Allow-Origin': '*' },
         });

         if (!response.ok) {
            throw new Error('fetching data failed!');
         }

         const data = await response.json();

         const transformData = data.map((item) => ({
            ...item,
            quantity: 1,
         }));

         dispatch(productUISliceAction.setProducts(transformData));
         dispatch(productUISliceAction.setLoading(false));
      };

      fetchPdoductData().catch((err) => {
         dispatch(productUISliceAction.setError(err.message));
         dispatch(productUISliceAction.setLoading(false));
      });
   };
};

export default fetchProductData;
