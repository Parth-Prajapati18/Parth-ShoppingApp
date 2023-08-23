/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {BiRadioCircle} from 'react-icons/bi'

export default function consultation() {

  const [storeLocation, setStoreLocation] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState({
    id:1,
    image: '/assets/VA-1',
    store: 'Parth Diamonds',
    add1: '1080 Bathrust street,',
    add2: 'Toronto, ON M5R 3G9',
    mobile: '548.994.8271',
    timing: 'Thurs-Mon: 10am-7pm'
  });

  const location = [
    {
      id:1,
      image: '/assets/VA-1',
      store: 'Parth Diamonds',
      add1: '1080 Bathrust street,',
      add2: 'Toronto, ON M5R 3G9',
      mobile: '548.994.8271',
      timing: 'Thurs-Mon: 10am-7pm'
    },
    {
      id:2,
      image: '/assets/VA-1',
      store: 'Calagary Diamond shop',
      add1: '3800 Memorial Dr #1100,',
      add2: 'Calgary, AB T2A 2K2',
      mobile: '403.235.2352',
      timing: 'Mon-Fri: 11am-8pm'
    },
    {
      id:3,
      image: '/assets/VA-1',
      store: 'Prajapati & sons',
      add1: '189 US-46, Saddle Brook,',
      add2: 'NJ 07663, United States',
      mobile: '201.226.0575',
      timing: 'Tue-Sunday: 8am-5pm'
    }
  ];

  useEffect(() => {
    const selected = location.find(loc => loc.id === storeLocation);
    setSelectedLocation(selected); 
  }, [storeLocation]);

  return (
    <div className='mx-2 md:mx-10'>

      <h2 className='my-3 mx-1 md:mt-8 md:mb-3 text-lg md:text-3xl font-medium uppercase text-center font-mono overflow-hidden'>
        Virtual Appointment
      </h2>

      <Image src='/assets/virtual-appointment.jpg'  alt='Virtual appointment' width={1500} height={250} className='m-auto'></Image>

      <p className="text-xs md:text-base text-center font-sans w-5/6 xl:w-1/2 m-auto mt-5 md:p-2">
      Book a virtual appointment with one of our jewelry consultants to experience a 1-on-1 video consultation where you can explore engagement rings, wedding bands, loose gemstones, jewelry, and so much more. Our virtual jewelry consultations allow you to receive guidance from jewelry experts while viewing your favorite Brilliant Earth pieces from the comfort and convenience of your home.
      </p>

      <p className="text-xs md:text-base text-center font-sans w-5/6 xl:w-1/2 m-auto mt-2 md:p-2">
      Whether you are looking to see close-ups of specific designs or seeking advice about which of the 4 Cs, precious metal types, or ring styles might be best for you, our jewelry specialists are here to answer all your questions. In your virtual jewelry consultation easily compare bands, center stones, metals, and ring stacking options while experiencing the same low-pressure, personalized environment that is offered in our stores.      </p>

    {/* Appointment Booking */}

    <div className='w-1/2 m-auto mt-4 p-6 border'>

      <div className='flex flex-row justify-center items-center mt-4'>
      <button id='section1'><BiRadioCircle className='text-gray-500 text-2xl'/></button>
      <hr className='w-48 border-2 border-gray-500'></hr>
      <button id='section2'><BiRadioCircle className='text-gray-500 text-2xl'/></button>
      <hr className='w-48 border-2 border-gray-500'></hr>
      <button id='section3'><BiRadioCircle className='text-gray-500 text-2xl'/></button>
      <hr className='w-48 border-2 border-gray-500'></hr>
      <button id='section4'><BiRadioCircle className='text-gray-500 text-2xl'/></button>
      </div>

      <h2 className='p-2 my-4 text-lg md:text-3xl font-medium uppercase text-center font-mono overflow-hidden'>
      Schedule an Appointment
      </h2>

      {/* section1 */}

      <div className='grid grid-cols-3 font-serif'>

        <div className='col-span-2 grid grid-cols-2 border-2 border-teal-500 p-2 m-2'>

          <Image src={'/assets/VA-1.jpg'} height={250} width={250} alt='VA1' className='p-1 m-auto'/>

            <div className='m-auto'>
              <h2 className='text-xl'>{selectedLocation.store}</h2>
              <p className='text-left my-2'>{selectedLocation.add1}<br/>{selectedLocation.add2} <br/>{selectedLocation.mobile}<br/> </p>
              <p className='my-1'>{selectedLocation.timing}</p>
              <button className='p-2 border border-black my-3'>Book An Appointment</button>
            </div>

        </div>

        {/* Three Locations */}
        <div className='grid grid-rows-3 gap-3 m-3 font-serif'>

            <div className='border border-black px-2 py-3 hover:border-teal-500 hover:duration-300' onClick={()=> setStoreLocation(1)}>
                <h3 className='text-xl'>Parth Diamonds</h3>
                <p>Toronto</p>
            </div>

            <div className='border border-black px-2 py-3 hover:border-teal-500 hover:duration-300' onClick={()=> setStoreLocation(2)}>
                <h3 className='text-xl'>Calagary Diamond shop</h3>
                <p>Calgary</p>
            </div>

            <div className='border border-black px-2 py-3 hover:border-teal-500 hover:duration-300' onClick={()=> setStoreLocation(3)}>
                <h3 className='text-xl'>Prajapati & sons</h3>
                <p>New Jersery</p>
            </div>

        </div>
        {/* Three Locations End*/}

      </div>

      {/* Section2 */}

      <div className='p-2'>
      <p className='font-serif bg-gray-100 font-light p-2'>Selected Store: {selectedLocation.store}</p>
      <div className='grid grid-cols-2 gap-4 p-2'>

        <div className='border grid grid-cols-3 hover:border-2 hover:border-teal-500'>
          <Image src={'/assets/APP1.webp'} alt='Image1' height={80} width={100} />
          <div className='col-span-2 mx-4 my-auto'>
            <p className='py-2 text-xl font-serif'>Engagement Ring</p>
            <p className='py-2 text-sm text-gray-500'>50 minutes appointment</p>
          </div>
        </div>

        <div className='border grid grid-cols-3 hover:border-2 hover:border-teal-500'>
          <Image src={'/assets/APP-2.jpg'} alt='Image2' height={80} width={100} />
          <div className='col-span-2 mx-4 my-auto'>
            <p className='py-2 text-xl font-serif'>Wedding Ring</p>
            <p className='py-2 text-sm text-gray-500'>50 minutes appointment</p>
          </div>
        </div>

        <div className='border grid grid-cols-3 hover:border-2 hover:border-teal-500'>
          <Image src={'/assets/APP-3.jpg'} alt='Image3' height={80} width={100} />
          <div className='col-span-2 mx-4 my-auto'>
            <p className='py-2 text-xl font-serif'>Fine Jewelry & Gifts</p>
            <p className='py-2 text-sm text-gray-500'>50 minutes appointment</p>
          </div>
        </div>


        <div className='border grid grid-cols-3 hover:border-2 hover:border-teal-500'>
          <Image src={'/assets/APP1.webp'} alt='Image4' height={80} width={100} />
          <div className='col-span-2 mx-4 my-auto'>
            <p className='py-2 text-xl font-serif'>Divorce Ring</p>
            <p className='py-2 text-sm text-gray-500'>50 minutes appointment</p>
          </div>
        </div>

      </div>
      </div>

    </div>

    </div>
  )
}
