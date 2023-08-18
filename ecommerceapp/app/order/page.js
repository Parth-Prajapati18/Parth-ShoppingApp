"use client"
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutButton = () => {
    const handleCheckout = async () => {
        try {
            const response = await fetch('/api/checkout', { method: 'POST' });
            const data = await response.json();

            if (!response) {
              return <div>Loading....</div>
            }

            if (response.ok) {
                const stripe = await loadStripe('pk_test_51Nej9FHMBfPp3rU08qHjJhCy0JIZpCur5CrsZyvUTvNJQMm7YKPi4ssWyQCy8iN5UCEfnkc7FXG0eCvICQOqgZ2m00NUYf2KGy');

                const { error } = await stripe.redirectToCheckout({
                    sessionId: data.sessionId
                });

                if (error) {
                    console.error(error);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button onClick={handleCheckout}>Checkout</button>
    );
};

const OrderPage = () => {
    return (
        <>
            <h1>Order Page</h1>
            <CheckoutButton />
        </>
    );
};

export default OrderPage;
