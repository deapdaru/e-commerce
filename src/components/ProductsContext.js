import React, { createContext, useState } from 'react';
import { DATA } from '../data';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    console.log(cartItems);

    const addCartItems = (products) => {
        console.log(products);
        setCartItems(products);
        console.log('product added');
    }

    return (
        <ProductsContext.Provider value={{DATA, cartItems, addCartItems}}>
            {props.children}
        </ProductsContext.Provider>
    )
}