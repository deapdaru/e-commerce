import React from 'react';
import CartNavBar from '../components/layout/CartNavBar';
import CartList from '../components/layout/CartList';

function Cart() {
    return (
        <React.Fragment>
            <CartNavBar/>
            <CartList/>
        </React.Fragment>
    )
}

export default Cart;
