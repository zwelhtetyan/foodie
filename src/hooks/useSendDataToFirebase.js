import { useCallback } from 'react';

const useSendDataToFirebase = () => {
    const sendRequest = useCallback(async (data, url) => {
        console.log(`sending ${url} data`);
        const response = await fetch(
            `https://shopify-eed5f-default-rtdb.asia-southeast1.firebasedatabase.app/${url}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                header: { 'CONTENT-TYPE': 'application/josn' },
            }
        );

        if (!response.ok) {
            throw new Error(`sending data failed!`);
        }
    }, []);

    return sendRequest;
};

export default useSendDataToFirebase;
