import React, { useContext } from 'react';
// import { Card } from '@material-ui/core';
import { ProductsContext } from '../../App'

function CartList() {
    const data = useContext(ProductsContext);
    const cartItems = data.cartItems;
    // const products = data.DATA.products;

    // const cartProducts = products.map((product) => console.log(product.id));
    console.log(cartItems);
    return (
        <React.Fragment>
            {/* {cartProducts.map((item) => (
                <Card>

                </Card>
            ))} */}
        </React.Fragment>
    )
}

export default CartList
