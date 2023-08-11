import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';

const SignUpForm = () => {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    aptName: '',
    streetName: '',
    city: '',
    province: '',
    country: '',
    postalCode: '',
    mobileNumber: '',
    acceptTerms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      ),
    confirmPassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    aptName: Yup.string().required('Required'),
    streetName: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    province: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required'),
    acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    mobileNumber: Yup.string(),
  });


  const handleSubmit = async (values, actions) => {
    try {
      const response = await axios.post('/api/signup', values);
      alert(response.data.Message);
      actions.resetForm();
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="w-full max-w-lg mx-auto mt-8">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-black font-semibold mb-2">
              First Name
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-2 border"
            />
            <ErrorMessage name="firstName" component="p" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-black font-semibold mb-2">
              Last Name
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-2 border"
            />
            <ErrorMessage name="lastName" component="p" className="text-red-500" />
          </div>
        </div>

        {/* Email And Mobile number Start */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
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
          <div>
            <label htmlFor="mobileNumber" className="block text-black font-semibold mb-2">
              Phone No.
            </label>
            <Field
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              className="w-full p-2 border"
            />
            <ErrorMessage name="mobileNumber" component="p" className="text-red-500" />
          </div>
        </div>
        {/* Email and Mobile number End */}

        {/* Password Start */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="password" className="block text-black font-semibold mb-2">
              Password
            </label>
            <Field
              type="text"
              id="password"
              name="password"
              className="w-full p-2 border"
            />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-black font-semibold mb-2">
              Confirm Password
            </label>
            <Field
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-2 border"
            />
            <ErrorMessage name="confirmPassword" component="p" className="text-red-500" />
          </div>
        </div>
        {/* Password End */}

        {/* Address fields Start*/}

        {/* StreeNamen and Number  */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="aptName" className="block text-black font-semibold mb-2">
              Apt/Street No.
            </label>
            <Field
              type="text"
              id="aptName"
              name="aptName"
              className="w-full p-2 border"
            />
            <ErrorMessage name="aptName" component="p" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="streetName" className="block text-black font-semibold mb-2">
              Street Name
            </label>
            <Field
              type="text"
              id="streetName"
              name="streetName"
              className="w-full p-2 border"
            />
            <ErrorMessage name="streetName" component="p" className="text-red-500" />
          </div>
        </div>

        {/* Province and City */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="city" className="block text-black font-semibold mb-2">
              City
            </label>
            <Field
              type="text"
              id="city"
              name="city"
              className="w-full p-2 border"
            />
            <ErrorMessage name="city" component="p" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="province" className="block text-black font-semibold mb-2">
              Province
            </label>
            <Field
              type="text"
              id="province"
              name="province"
              className="w-full p-2 border"
            />
            <ErrorMessage name="province" component="p" className="text-red-500" />
          </div>
        </div>

        {/* country and postalCode */}

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="country" className="block text-black font-semibold mb-2">
              Country
            </label>
            <Field
              type="text"
              id="country"
              name="country"
              className="w-full p-2 border"
            />
            <ErrorMessage name="country" component="p" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-black font-semibold mb-2">
              Postal Code
            </label>
            <Field
              type="text"
              id="postalCode"
              name="postalCode"
              className="w-full p-2 border"
            />
            <ErrorMessage name="postalCode" component="p" className="text-red-500" />
          </div>
        </div>
        {/* Address fields End*/}

        {/* Accept Terms and Conditions */}

        <div className="mb-4">
          <label htmlFor="acceptTerms" className="flex items-center">
            <Field
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              className="mr-2"
            />
            <span className="text-black font-semibold">
              I accept the
              <a
                href="/termsncondition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-1"
              >
                terms and conditions
              </a>
            </span>
          </label>
          <ErrorMessage name="acceptTerms" component="p" className="text-red-500" />
        </div>

        {/* Terms and conditon end */}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-900"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <div className='flex justify-center items-center py-3'>
          <p className='px-2 text-slate-500'>Already have an account?</p>
          <Link className='px-1 text-lg text-slate-800 hover:underline' href={'/login'}>Log In</Link>
        </div>

      </Form>
    </Formik>
  );
};

export default SignUpForm;
