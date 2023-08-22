/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaPhoneAlt, FaStore } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SlCalender } from 'react-icons/sl'
import { IoIosArrowForward } from 'react-icons/io'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {BsChat} from 'react-icons/bs'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Accordion = ({ title, children, active, onClick }) => {

    return (
        <div className='border'>
            <button
                className='flex items-center justify-between w-full text-md px-5 py-1'
                onClick={onClick}
            >
                {title}
                {active ? <AiOutlineMinus className='mr-1' /> : <AiOutlinePlus className='mr-1' />}
            </button>
            <div className={`mt-2 transition-all duration-300 ${active ? 'max-h-full' : 'max-h-0 overflow-hidden'}`}>
                {children}
            </div>
        </div>
    );
};

export default function footer() {

    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveAccordion(index === activeAccordion ? null : index);
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
        },
    });

    return (
        <div>

            <div className='hidden md:grid md:grid-cols-3 my-8 mx-3'>

                <div className='flex flex-col  text-left items-center'>
                    <div className='flex flex-col text-left gap-1'>
                        <h1 className='text-gray-500 uppercase text-sm mb-3'>About</h1>
                        <Link className='text-gray-500 text-sm hover:text-teal-500' href={'/'}>Our Story</Link>
                        <Link className='text-gray-500 text-sm hover:text-teal-500' href={'/'}>Jewelry Financing</Link>
                        <Link className='text-gray-500 text-sm hover:text-teal-500' href={'/'}>Promo Codes & Offers</Link>
                        <Link className='text-gray-500 text-sm hover:text-teal-500' href={'/'}>FAQs</Link>
                    </div>
                </div>

                <div className='flex flex-col items-center text-left'>
                    <div className='flex flex-col text-left gap-1'>
                        <h1 className='text-gray-500 uppercase text-sm mb-3'>Contact Us</h1>
                        <Link className='text-gray-500 text-sm hover:text-teal-500' href={'mailto:parthb1806@gmail.com'}> <HiOutlineMail className='inline mr-2' />parthb1806@gmail.com</Link>
                        <Link className='text-gray-500 text-sm hover:text-teal-500' href={'tel:+15489948270'}><FaPhoneAlt className='inline mr-2' />+15489948270</Link>
                        <Link className='text-gray-500 text-sm hover:text-teal-500' href={'/'}> <FaStore className='inline mr-2' />Store</Link>
                        <Link className='text-gray-500 text-sm  hover:text-teal-500' href={'/'}> <SlCalender className='inline mr-2 ' />Book Appointment</Link>
                    </div>
                </div>

                <div className='flex flex-col items-center text-left mb-3'>
                    <div className='flex flex-col text-left gap-1'>
                        <h1 className='text-gray-500 uppercase text-sm mb-5'>Sign Up for email</h1>
                        <p className='text-gray-500 text-sm mb-1'>Send me Brilliant Earth news, updates and offers.</p>
                        <form className='flex flex-row' onSubmit={formik.handleSubmit}>
                            <input
                                type='email'
                                name='email'
                                placeholder='Your Email Address'
                                className={`border p-2 font-gray-700 hover:none focus:border-teal-500 focus:outline-none ${formik.errors.email && formik.touched.email ? 'border-red-500' : ''
                                    }`}
                                {...formik.getFieldProps('email')}
                            />
                            <button type='submit' className='block p-2 w-auto border h-full bg-teal-500 text-white'>
                                <IoIosArrowForward />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <p className='text-center text-gray-500'>&copy;2023 Parth Prajapati</p>

            <div className='my-8 md:hidden'>

                <div>
                    <h1 className='text-md text-center p-2'>CONTACT</h1>
                </div>

                <div className='flex flex-row justify-around p-2 mb-4'>
                    <div className='flex flex-col justify-center items-center gap-1'><BsChat className='text-xl'/>Chat</div>
                    <div className='flex flex-col justify-center items-center gap-1'><FaPhoneAlt className='text-xl'/>Call</div>
                    <div className='flex flex-col justify-center items-center gap-1'><HiOutlineMail className='text-xl'/>Email</div>
                </div>

                <Accordion
                    title='About'
                    active={activeAccordion === 0}
                    onClick={() => handleAccordionClick(0)}
                >
                    <div className='flex flex-col text-left mx-7'>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Our Story</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Jewelry Financing</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Promo Codes & Offers</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>FAQs</Link>
                    </div>
                </Accordion>
                <Accordion
                    title='Contact Us'
                    active={activeAccordion === 1}
                    onClick={() => handleAccordionClick(1)}
                >
                    <div className='flex flex-col text-left mx-7'>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Our Story</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Jewelry Financing</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Promo Codes & Offers</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>FAQs</Link>
                    </div>
                </Accordion>
                <Accordion
                    title='About'
                    active={activeAccordion === 0}
                    onClick={() => handleAccordionClick(0)}
                >
                    <div className='flex flex-col text-left mx-7'>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Our Story</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Jewelry Financing</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Promo Codes & Offers</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>FAQs</Link>
                    </div>
                </Accordion>
                <Accordion
                    title='Contact Us'
                    active={activeAccordion === 1}
                    onClick={() => handleAccordionClick(1)}
                >
                    <div className='flex flex-col text-left mx-7'>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Our Story</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Jewelry Financing</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>Promo Codes & Offers</Link>
                        <Link className='text-sm hover:text-teal-500 py-1' href={'/'}>FAQs</Link>
                    </div>
                </Accordion>

                <div className='flex flex-col justify-base mx-5 my-4'>
                    <h1 className='text-md py-1 my-1'>Sign Up for email</h1>
                    <form className='flex flex-row' onSubmit={formik.handleSubmit}>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email Address'
                            className={`border w-full text-sm p-2 hover:none focus:border-teal-500 focus:outline-none ${formik.errors.email && formik.touched.email ? 'border-red-500' : ''
                                }`}
                            {...formik.getFieldProps('email')}
                        />
                        <button type='submit' className='block p-2 w-auto border h-full bg-teal-500 text-white'>
                            <IoIosArrowForward />
                        </button>
                    </form>
                </div>
                    <p className='text-center text-gray-500'>&copy;2023 Parth Prajapati</p>
            </div>

        </div>
    )
}
