const sendCartDataToFirebase = (cartItems) => {
    const sendRequest = async () => {
        const response = await fetch(
            'https://shopify-eed5f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
            {
                method: 'PUT',
                body: JSON.stringify(cartItems),
                header: { 'CONTENT-TYPE': 'application/josn' },
            }
        );

        if (!response.ok) {
            throw new Error('sending data failed!');
        }
    };

    sendRequest().catch((err) => {
        console.log(err);
    });
};

export default sendCartDataToFirebase;
