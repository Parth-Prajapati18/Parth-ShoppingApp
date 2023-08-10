"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 10);
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
          <Link className='px-1 text-lg text-slate-800 hover:underline' href={'/'}>Sign Up</Link>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
