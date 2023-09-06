"use strict";  // Use strict mode

import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { globalContext } from '@/app/globals/context';

const LoginForm = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const {setIsLogin, setUserObj, user} = useContext(globalContext);

  const {push} = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/login', values);
      setIsLogin(response.data.Message);
      if (response.data.Message) {
        setUserObj(response.data.user)
        console.log(response)
        push('/',{ scroll: true })
      } else {
        alert("Wrong Logins");
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="w-full max-w-sm mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="email" className="block text-black font-semibold mb-2">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border"
          />
          <ErrorMessage name="email" component="p" className="text-red-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-black font-semibold mb-2">
            Password
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border"
          />
          <ErrorMessage name="password" component="p" className="text-red-500" />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-2 md:px-3 xl:px-4"
        >
          Log In
        </button>
        <div className='flex justify-center items-center py-3'>
          <p className='px-2 text-slate-500'>Dont have an account?</p>
          <Link href="/signup" className='px-1 text-lg text-slate-800 hover:underline'>
            Sign Up
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
