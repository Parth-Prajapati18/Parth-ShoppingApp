/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useContext } from 'react'
import { globalContext } from '../globals/context'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import Link from 'next/link'

export default function WishList() {
    const {wishList, addToWishList, removeToWishList, products} = useContext(globalContext);

  return (
    <div>
        <h2 className='my-3 mx-1 md:mt-8 md:mb-3 text-lg md:text-3xl font-medium uppercase text-center font-mono overflow-hidden'>
           Your Wish List
        </h2>  

              {/* Products */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6'>
        {wishList.map(productId =>{
            const product = products.find(p => p.id == productId);
            return(
          <div key={product.id} className='border p-4'>
            <div className='flex justify-between text-lg'>
            <h3 className='font-semibold p-2'>{product.company} - {product.productName}</h3>
            {
              wishList.includes(product.id) ?
              <AiFillHeart className='mt-2.5 fill-red-500 text-2xl' onClick={() => removeToWishList(product.id)}/>
              :
              <AiOutlineHeart className='mt-2.5 text-2xl' onClick={() => addToWishList(product.id)  } />
            }
            </div>
            <Link href={`/productDecp/${product.id}`} className='hover:underline'>
              <div className='aspect-w-3 aspect-h-4'>
                <img
                src={product.src}
                alt={product.productName}
                className='object-cover w-full h-full hover:scale-105'
                />
              </div>
              <p className='font-medium py-2 '>{product.shortDescription}</p>
            </Link>
            <p className='text-gray-600 py-1'>Price: ${product.price}</p>
          </div>
        )})}
      </div>


    </div>
  )
}
