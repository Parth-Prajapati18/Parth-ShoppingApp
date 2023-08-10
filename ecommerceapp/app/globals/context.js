/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useMemo, useState, createContext } from 'react'

export const globalContext = createContext();

export function ContextProvider({ children }) {
    const [isLogIn, setIsLogin] = useState(false);
    const [cartAry, setCartAry] = useState([1]);
    const [wishList, setWhishList] = useState([]);

    const userLogin = useMemo(() => isLogIn, [isLogIn]);

    function addToCart(product) {
        setCartAry([...cartAry, product]);
    }

    function removeToCart(product) {
        setCartAry(cartAry.filter((item) => item !== product));
    }

    function removeAllCart() {
        setCartAry([]);
    }

    function addToWishList(product) {
        setWhishList([...wishList, product]);
    }

    function removeToWishList(product) {
        setWhishList(wishList.filter((item) => item !== product));
    }

    function removeAllWishList() {
        setWhishList([]);
    }

    return (
        <globalContext.Provider
            value={{
                userLogin,
                setIsLogin,
                addToCart,
                removeToCart,
                removeAllCart,
                addToWishList,
                removeToWishList,
                removeAllWishList,
                wishList, 
                cartAry
            }}
        >
            {children}
        </globalContext.Provider>
    );
}
