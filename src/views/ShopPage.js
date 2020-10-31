import React from 'react';
import ShopNavBar from '../components/layout/ShopNavBar';
import ProductsList from '../components/layout/ProductsList';

function Shop(props) {
    return (
        <React.Fragment>
            <ShopNavBar logout={props.logout} />
            <ProductsList />
        </React.Fragment>
    )
}

export default Shop;
