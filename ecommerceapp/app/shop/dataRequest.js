/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/products');
        const productsData = response.data.Products;
        setProducts(productsData);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  return products;
}

export default ProductsList;
