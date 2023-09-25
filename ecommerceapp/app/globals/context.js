/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import productAry from '../shop/data'
import React, { useMemo, useState, createContext, useEffect } from 'react'

export const globalContext = createContext();

export function ContextProvider({ children }) {
    const [isLogIn, setIsLogin] = useState(false);
    const [cartAry, setCartAry] = useState([1]);
    const [wishList, setWhishList] = useState([]);
    const [products, setProducts] = useState(productAry);
    const [user, setUser] = useState({});
    const [cartProducts, setCartProducts] = useState([]);

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

    function setUserObj(obj) {
        setUser(obj)
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('/api/products');
    //             if (response.status === 200) {
    //                 setProducts(response.data.Products)
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, []);


    useEffect(() => {
        try {
            const fetchCartProducts = async () => {
                const fetchedProducts = await Promise.all(cartAry.map(async (item) => {
                    const product = products.find(p => p.id === item);
                    return product;
                }));
                setCartProducts(fetchedProducts.filter(product => product));
            };
            fetchCartProducts();
        } catch (error) {
            console.error(error);
        }
    }, [cartAry, products]);
    


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
                cartAry,
                user,
                setUserObj,
                products,
                cartProducts
            }}
        >
            {children}
        </globalContext.Provider>
    );
}
