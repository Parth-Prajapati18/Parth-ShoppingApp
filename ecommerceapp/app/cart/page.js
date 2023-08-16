/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { globalContext } from '@/app/globals/context';
import { useContext} from 'react';
import Link from 'next/link';
import { AiOutlineHeart, AiFillHeart, AiOutlineArrowRight } from 'react-icons/ai';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import { useRouter } from 'next/navigation';

function cart() {

    const { wishList, addToWishList, removeToWishList, removeToCart, cartProducts , userLogin, products } = useContext(globalContext);
    const { push } = useRouter();

    if (cartProducts.length === 0) {
        return (
            <div>
                <h2 className='my-3 mx-1 md:mt-8 md:mb-3 text-lg md:text-3xl font-medium uppercase text-center font-mono overflow-hidden'>
                    Your cart is empty
                </h2>

                <div className='px-4 md:px-16 mt-8'>
                    <h1 className='text-2xl md:text-3xl font-semibold mb-1 mt-2'>You may like this </h1>
                    <div className='grid md:grid-cols-3 xl:grid-cols-5 mt-4 gap-4'>
                        {products.slice(0, 4).map(relatedProduct => (
                            <div key={relatedProduct.id} className='border p-4'>
                                <div className='flex justify-between text-lg'>
                                    <h3 className='font-semibold p-2'>{relatedProduct.company} - {relatedProduct.productName}</h3>
                                    {
                                        wishList.includes(relatedProduct.id) ?
                                            <AiFillHeart className='mt-2.5 fill-red-500 text-2xl' onClick={() => removeToWishList(relatedProduct.id)} />
                                            :
                                            <AiOutlineHeart className='mt-2.5 text-2xl' onClick={() => addToWishList(relatedProduct.id)} />
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
        )
    }

    const calculateTotal = () => {
        let total = 0;
        cartProducts.forEach(product => {
            total += product.price;
        });
        return total;
    };

    const calculateTax = total => {
        const taxRate = 0.13; // 13%
        return total * taxRate;
    };

    const placeOrder = () => {
        if (userLogin) {
            push('/order')
        } else {
            push('/login')
        }
    };

    return (
        <div className='px-4 md:px-16 mt-8'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-1 mt-2'>Your Cart</h2>
            <div className='grid md:grid-cols-1 mt-4 gap-4'>
                {cartProducts.map(product => {
                    return (
                        <div key={product.id} className='border p-4'>
                            <div className='flex justify-between items-center'>
                                <Link href={`/productDecp/${product.id}`}>
                                    <div className='flex items-center'>
                                        <img
                                            src='/assets/jewellery.jpeg'
                                            alt='Img 1'
                                            className='object-cover w-16 h-16 mr-4'
                                        />
                                        <h3 className='font-semibold'>{product.productName}</h3>
                                    </div>
                                </Link>
                                <button
                                    className='mt-2.5 text-2xl'
                                    onClick={() => removeToCart(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                            <p className='text-gray-600 py-1'>Price: ${product.price}</p>
                        </div>
                    );
                })}
            </div>
            <div className='mt-6'>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Subtotal:</p>
                    <p className='pr-2'>${calculateTotal().toFixed(2)}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Tax (13%):</p>
                    <p className='pr-2'>${calculateTax(calculateTotal()).toFixed(2)}</p>
                </div>
                <hr className='my-1'></hr>
                <div className='flex justify-between mt-2'>
                    <p className='font-semibold'>Total:</p>
                    <p className='pr-2'>${(calculateTotal() + calculateTax(calculateTotal())).toFixed(2)}</p>
                </div>

                <div className='flex justify-between w-full mt-4'>

                    <div className='flex items-center justify-left  mt-4'>
                        <Link href='/shop' className='text-lg md:text-xl xl:text-2xl hover:scale-110 flex flex-row items-center'>
                            Continue Shopping <LiaLongArrowAltRightSolid className='ml-1 text-3xl' />
                        </Link>
                    </div>

                    <button
                        className='mt-6 bg-black text-white py-2 px-2 md:px-3 xl:px-4 '
                        onClick={placeOrder}
                    >
                        Place Order
                    </button>

                </div>
            </div>

        </div>
    );
}

export default cart