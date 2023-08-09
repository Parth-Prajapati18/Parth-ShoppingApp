/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState, useContext } from 'react';
import products from '../../shop/data';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart,AiFillHeart, AiOutlineArrowRight } from 'react-icons/ai';
import { globalContext } from '@/app/globals/context'

const ProductDetail = ({ params }) => {

  const {wishList, addToWishList, removeToWishList} = useContext(globalContext);
  const product = products.find(p => p.id == params.productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const [selectedImage, setSelectedImage] = useState(product.additionalImages[0]);

  return (
    <div>
      <h1 className='text-3xl font-semibold mb-1 mt-2 text-center'>{product.productName}</h1>

      <div className='flex flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-4 md:ml-24 lg:gap-10 mx-4 md:mx-16'>

        <div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-2 gap-1 h-1/4 mx-8 md:mx-1'>
          {product.additionalImages.map((imgsrc, index) => (
            <div
              key={index}
              className={`w-full h-auto ${selectedImage === imgsrc ? 'border-black border-2' : 'border'}`}
              onClick={() => setSelectedImage(imgsrc)}
            >
              <Image src={imgsrc} alt={product.productName} width={120} height={100} />
            </div>
          ))}
        </div>

        <div className='md:flex-1 flex items-center justify-center'>
          <Image
            src={selectedImage}
            alt={product.productName}
            width={600}
            height={550}
            className='border-blue-500'
          />
        </div>



      <div className='lg:w-1/4 pt-4 md:pt-8 mx-4 md:mx-8 xl:mx-16 '>
        <p className='text-gray-800 mb-4 text-2xl'>{product.shortDescription}</p>
        <ul className='pl-4 md:pl-0 xl:pl-6 space-y-2'>
          {['Company', 'Style', 'Weight', 'Color', 'Material'].map(attribute => (
            <li key={attribute} className='flex items-start'>
              <span className='font-semibold mr-2'>{attribute}:</span>
              {product[attribute.toLowerCase()]}
            </li>
          ))}
        </ul>

        <div className='flex flex-col gap-2 mt-8'>
          <span className='px-4 py-2 bg-white font-semibold border border-black text-center'>$ {product.price.toFixed(2)}</span>
          {
            wishList.includes(product.id) ?
            <button className='px-4 py-2 bg-black font-normal italic text-white border text-center' onClick={() => removeToWishList(product.id)}>
              Remove from Wishlist
            </button>
            :
          <button className='px-4 py-2 bg-black font-semibold text-white border text-center' onClick={() => addToWishList(product.id)}>
            Add to Wishlist
          </button>

          }
          <button className='px-4 py-2 bg-black font-semibold text-white border'>
            Add to Cart
          </button>
          <button className='px-4 py-2 bg-white font-semibold border border-black'>
            Schedule An Appointment (Consultation)
          </button>
        </div>
      </div>

      </div>

      {/* You may like this */}
      <div className='px-4 md:px-16 mt-8'>
        <h1 className='text-2xl md:text-3xl font-semibold mb-1 mt-2'>You may also like this </h1>
        <div className='grid md:grid-cols-3 xl:grid-cols-5 mt-4 gap-4'>
          {products.slice(0, 4).map(relatedProduct => (
            <div key={relatedProduct.id} className='border p-4'>
              <div className='flex justify-between text-lg'>
                <h3 className='font-semibold p-2'>{relatedProduct.company} - {relatedProduct.productName}</h3>
                {
              wishList.includes(relatedProduct.id) ?
              <AiFillHeart className='mt-2.5 fill-red-500 text-2xl' onClick={() => removeToWishList(relatedProduct.id)}/>
              :
              <AiOutlineHeart className='mt-2.5 text-2xl' onClick={() => addToWishList(relatedProduct.id)  } />
            }
              </div>
              <Link href={`/productDecp/${relatedProduct.id}`} className='hover:underline'>
                <div className='aspect-w-3 aspect-h-4'>
                  <img
                    src={relatedProduct.src}
                    alt={relatedProduct.productName}
                    className='object-cover w-full h-full hover:scale-105'
                  />
                </div>
                <p className='font-medium py-2 '>{relatedProduct.shortDescription}</p>
              </Link>
              <p className='text-gray-600 py-1'>Price: ${relatedProduct.price}</p>
            </div>
          ))}
          <div className='flex items-center justify-left px-16'>
            <Link href='/shop' className='text-2xl hover:text-blue-700 hover:scale-110 flex flex-row'>
              View All <AiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
