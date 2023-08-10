"use client"
import React from 'react';
import LoginForm from './loginform';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center max-h-screen h-2/3 bg-white">
      <h2 className='my-3 mx-1 md:mt-8 md:mb-3 text-lg md:text-3xl font-medium uppercase text-center font-mono overflow-hidden'>
        Login
      </h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;