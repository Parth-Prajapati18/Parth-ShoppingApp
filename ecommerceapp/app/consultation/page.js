/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BiRadioCircle, BiSolidCircle } from 'react-icons/bi'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function consultation() {

  const [storeLocation, setStoreLocation] = useState(1);
  const [value, setValue] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [clickedTime, setClickedTime] = useState(null);
  const [ring, setRing] = useState('Engagement Ring');
  const [selectedStage, setSelectedStage] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState({
    id: 1,
    image: '/assets/VA-1',
    store: 'Parth Diamonds',
    add1: '1080 Bathrust street,',
    add2: 'Toronto, ON M5R 3G9',
    mobile: '548.994.8271',
    timing: 'Thurs-Mon: 10am-7pm'
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    textAlerts: false,
    emailUpdates: false,
  };

  const isWeekend = (date) => {
    const day = date.day();
    return day === 0 || day === 6;
  };


  const location = [
    {
      id: 1,
      image: '/assets/VA-1',
      store: 'Parth Diamonds',
      add1: '1080 Bathrust street,',
      add2: 'Toronto, ON M5R 3G9',
      mobile: '548.994.8271',
      timing: 'Thurs-Mon: 10am-7pm'
    },
    {
      id: 2,
      image: '/assets/VA-1',
      store: 'Calagary Diamond shop',
      add1: '3800 Memorial Dr #1100,',
      add2: 'Calgary, AB T2A 2K2',
      mobile: '403.235.2352',
      timing: 'Mon-Fri: 11am-8pm'
    },
    {
      id: 3,
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

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone Number is required'),
    message: Yup.string(),
    textAlerts: Yup.boolean(),
    emailUpdates: Yup.boolean(),
  });

    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, actions) => {
        const selected = location.find(loc => loc.id === storeLocation);
        const appObj = {
          ...values,
          storeLocation : selected.store,
          ring,
          appDate: value?.format('MMM DD YYYY'),
          appTime: selectedTime
        }
        console.log('Form submitted with values:', appObj);
 
        try {
          await axios.post('/api/renderAppEmail', appObj);
          console.log('Email sent successfully');
          actions.resetForm();
        } catch (error) {
          console.error('Error sending email:', error);
      }
        
      },
    });


    return (
      <div className='mx-2 md:mx-10'>

        <h2 className='my-3 mx-1 md:mt-8 md:mb-3 text-lg md:text-3xl font-medium uppercase text-center font-mono overflow-hidden'>
          Virtual Appointment
        </h2>

        <Image src='/assets/virtual-appointment.jpg' alt='Virtual appointment' width={1500} height={250} className='m-auto'></Image>

        <p className="text-xs md:text-base text-center font-sans w-5/6 xl:w-1/2 m-auto mt-5 md:p-2">
          Book a virtual appointment with one of our jewelry consultants to experience a 1-on-1 video consultation where you can explore engagement rings, wedding bands, loose gemstones, jewelry, and so much more. Our virtual jewelry consultations allow you to receive guidance from jewelry experts while viewing your favorite Brilliant Earth pieces from the comfort and convenience of your home.
        </p>

        <p className="text-xs md:text-base text-center font-sans w-5/6 xl:w-1/2 m-auto mt-2 md:p-2">
          Whether you are looking to see close-ups of specific designs or seeking advice about which of the 4 Cs, precious metal types, or ring styles might be best for you, our jewelry specialists are here to answer all your questions. In your virtual jewelry consultation easily compare bands, center stones, metals, and ring stacking options while experiencing the same low-pressure, personalized environment that is offered in our stores.      </p>

        {/* Appointment Booking */}

        <div className='w-full md:w-2/3 2xl:w-1/2 mx-1 md:m-auto mt-2 md:mt-4 p-2 md:p-6 border'>

          <div className='flex flex-row justify-center items-center mt-4'>
            <button id='section1' onClick={()=>setSelectedStage(1)}>{ selectedStage===1 ? <BiSolidCircle className='text-xl fill-teal-500'/> : <BiRadioCircle className={`text-2xl ${ selectedStage>1 ? 'text-teal-500' :'text-gray-500'}`}/> }</button>
            <hr className={`w-48 border-2 ${ selectedStage>1 ? 'border-teal-500' :'border-gray-500'}`}></hr>
            <button id='section2' onClick={()=>setSelectedStage(2)}>{ selectedStage===2 ? <BiSolidCircle className='text-xl fill-teal-500'/> : <BiRadioCircle className={`text-2xl ${ selectedStage>2 ? 'text-teal-500' :'text-gray-500'}`} /> }</button>
            <hr className={`w-48 border-2 ${ selectedStage>2 ? 'border-teal-500' :'border-gray-500'}`}></hr>
            <button id='section3' onClick={()=>setSelectedStage(3)}>{ selectedStage===3 ? <BiSolidCircle className='text-xl fill-teal-500'/> : <BiRadioCircle className={`text-2xl ${ selectedStage>3 ? 'text-teal-500' :'text-gray-500'}`} /> }</button>
            <hr className={`w-48 border-2 ${ selectedStage>3 ? 'border-teal-500' :'border-gray-500'}`}></hr>
            <button id='section4' onClick={()=>{selectedTime && setSelectedStage(4)}} disabled={!selectedTime}>{ selectedStage===4 ? <BiSolidCircle className='text-xl fill-teal-500'/> : <BiRadioCircle className='text-gray-500 text-2xl' /> }</button>
          </div>

          <h2 className='p-2 my-2 md:my-4 text-lg md:text-3xl font-medium uppercase text-center font-mono overflow-hidden'>
            Schedule an Appointment
          </h2>

          {/* section1 */}

          {
            selectedStage === 1 && 
          <div className='grid grid-cols-1 md:grid-cols-3 font-serif'>

            <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 border-2 border-teal-500 p-2 m-2'>

              <Image src={'/assets/VA-1.jpg'} height={250} width={250} alt='VA1' className='p-1 m-auto' />

              <div className='m-auto'>
                <h2 className='text-xl'>{selectedLocation.store}</h2>
                <p className='text-left my-2'>{selectedLocation.add1}<br />{selectedLocation.add2} <br />{selectedLocation.mobile}<br /> </p>
                <p className='my-1'>{selectedLocation.timing}</p>
                <button className='p-2 border border-black my-3' onClick={()=>setSelectedStage(2)}>Book An Appointment</button>
              </div>

            </div>

            {/* Three Locations */}
            <div className='grid grid-rows-1 md:grid-rows-3 gap-3 m-3 font-serif'>

              <div className='border border-black px-2 py-3 hover:border-teal-500 hover:duration-300' onClick={() => setStoreLocation(1)}>
                <h3 className='hidden md:block  text-xs md:text-xl'>Parth Diamonds</h3>
                <p className='text-sm text-center md:text-left'>Toronto</p>
              </div>

              <div className='border border-black px-2 py-3 hover:border-teal-500 hover:duration-300' onClick={() => setStoreLocation(2)}>
                <h3 className='hidden md:block text-xs md:text-xl'>Calagary Diamond shop</h3>
                <p className='text-sm text-center md:text-left'>Calgary</p>
              </div>

              <div className='border border-black px-2 py-3 hover:border-teal-500 hover:duration-300' onClick={() => setStoreLocation(3)}>
                <h3 className='hidden md:block text-xs md:text-xl'>Prajapati & sons</h3>
                <p className='text-xs text-center md:text-left'>New Jersey</p>
              </div>

            </div>
            {/* Three Locations End*/}

          </div>
          }

          {/* Section2 */}

          {
            selectedStage === 2 &&  
          <div className='p-2'>
            <p className='font-serif bg-gray-100 font-light p-2'>Selected Store: {selectedLocation.store}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-1 md:p-2'>

              <div className='border grid grid-cols-3 hover:border-2 hover:border-teal-500' onClick={() => {setRing('Engagement Ring'); setSelectedStage(3);}}>
                <Image src={'/assets/APP1.webp'} alt='Image1' height={80} width={100} />
                <div className='col-span-2 mx-4 my-auto'>
                  <p className='py-2 text-base md:text-xl font-serif'>Engagement Ring</p>
                  <p className='py-2 text-xs md:text-sm text-gray-500'>50 minutes appointment</p>
                </div>
              </div>

              <div className='border grid grid-cols-3 hover:border-2 hover:border-teal-500' onClick={() => {setRing('Wedding Ring'); setSelectedStage(3);}}>
                <Image src={'/assets/APP-2.jpg'} alt='Image2' height={80} width={100} />
                <div className='col-span-2 mx-4 my-auto'>
                  <p className='py-2 text-base md:text-xl font-serif'>Wedding Ring</p>
                  <p className='py-2 text-xs md:text-sm text-gray-500'>50 minutes appointment</p>
                </div>
              </div>

              <div className='border grid grid-cols-3 hover:border-2 hover:border-teal-500' onClick={() => {setRing('Fine Jewelry & Gifts'); setSelectedStage(3);}}>
                <Image src={'/assets/APP-3.jpg'} alt='Image3' height={80} width={100} />
                <div className='col-span-2 mx-4 my-auto'>
                  <p className='py-2 text-base md:text-xl font-serif'>Fine Jewelry & Gifts</p>
                  <p className='py-2 text-xs md:text-sm text-gray-500'>50 minutes appointment</p>
                </div>
              </div>


              <div className='border grid grid-cols-3 hover:border-2 hover:border-teal-500' onClick={() => {setRing('Divorce Ring'); setSelectedStage(3);}}>
                <Image src={'/assets/APP1.webp'} alt='Image4' height={80} width={100} />
                <div className='col-span-2 mx-4 my-auto'>
                  <p className='py-2 text-base md:text-xl font-serif'>Divorce Ring</p>
                  <p className='py-2 text-xs md:text-sm text-gray-500'>50 minutes appointment</p>
                </div>
              </div>

            </div>
          </div>
          }

          {/* Section2 End */}

          {/* Section 3 */}

          {
            selectedStage === 3 && 
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 font-serif'>

            <div className='p-1 md:p-4 m-auto'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar views={['day']} fixedWeekNumber={5} className='border' disablePast value={value} onChange={(newValue) => setValue(newValue)} shouldDisableDate={isWeekend} />
                {console.log(value)}
              </LocalizationProvider>
            </div>

            <div className='p-4 m-auto '>

              <p className='text-center text-lg sm:text-xl'>Pick Time Slot</p> <br />
              <div className=' grid grid-cols-3 gap-2 md:gap-4'>
                <button onClick={(e) => { setSelectedTime(e.target.value); setClickedTime(1); }} value='08:00 AM' className={`border-2 p-2 text-xs md:text-base hover:border-teal-500 ${clickedTime === 1 ? 'border-teal-500' : ''}`} >08:00 AM</button>
                <button onClick={(e) => { setSelectedTime(e.target.value); setClickedTime(2); }} value='09:00 AM' className={`border-2 p-2 text-xs md:text-base hover:border-teal-500 ${clickedTime === 2 ? 'border-teal-500' : ''}`} >09:00 AM</button>
                <button onClick={(e) => { setSelectedTime(e.target.value); setClickedTime(3); }} value='10:00 AM' className={`border-2 p-2 text-xs md:text-base hover:border-teal-500 ${clickedTime === 3 ? 'border-teal-500' : ''}`} >10:00 AM</button>
                <button onClick={(e) => { setSelectedTime(e.target.value); setClickedTime(4); }} value='11:00 AM' className={`border-2 p-2 text-xs md:text-base hover:border-teal-500 ${clickedTime === 4 ? 'border-teal-500' : ''}`} >11:00 AM</button>
                <button onClick={(e) => { setSelectedTime(e.target.value); setClickedTime(5); }} value='12:00 PM' className={`border-2 p-2 text-xs md:text-base hover:border-teal-500 ${clickedTime === 5 ? 'border-teal-500' : ''}`} >12:00 AM</button>
                <button onClick={(e) => { setSelectedTime(e.target.value); setClickedTime(6); }} value='01:00 PM' className={`border-2 p-2 text-xs md:text-base hover:border-teal-500 ${clickedTime === 6 ? 'border-teal-500' : ''}`} >01:00 PM</button>
                <button onClick={(e) => { setSelectedTime(e.target.value); setClickedTime(7); }} value='02:00 PM' className={`border-2 p-2 text-xs md:text-base hover:border-teal-500 ${clickedTime === 7 ? 'border-teal-500' : ''}`} >02:00 PM</button>
                <button onClick={(e) => { setSelectedTime(e.target.value); setClickedTime(8); }} value='03:00 PM' className={`border-2 p-2 text-xs md:text-base hover:border-teal-500 ${clickedTime === 8 ? 'border-teal-500' : ''}`} >03:00 PM</button>
                <button onClick={(e) => { setSelectedTime(e.target.value); setClickedTime(9); }} value='04:00 PM' className={`border-2 p-2 text-xs md:text-base hover:border-teal-500 ${clickedTime === 9 ? 'border-teal-500' : ''}`}>04:00 PM</button>
              </div>
              {selectedTime === null ? null : <button className='text-sm md:text-xl pt-3 md:pt-10 underline text-teal-500 hove:text-black float-right' onClick={()=>setSelectedStage(4)}>Next</button>}
            </div>
          </div>
          }
          {/* Se ction 3 End*/}

          {/* Section 4 Start */}

          {
            selectedStage === 4 &&  
          <div>
            <p className='text-center text-xl font-serif'>Final Details</p>
            <div className='grid grid-cols-1 md:grid-cols-2'>

            <div className="flex justify-center items-center my-2 bg-[url('/assets/appoint-bg.jpg')] bg-cover w-full h-[372px]">
                <div className='h-[278px] w-[278px] rounded-full bg-white flex justify-center items-center flex-col'>
                  <p className='text-lg'>{ring}</p>
                  <p className='text-lg mb-2'>Appointment</p>
                  <p className='text-sm'>Virtual Appointment</p>
                  <p className='text-sm'>From the comfort of your home</p>
                  <p className='text-sm'>{selectedTime}</p>
                  <p className='text-sm'>{value?.format('MMM DD YYYY')}</p>
                </div>
              </div>

              <div>
                <div>
                  <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2 px-2 m-2 hover:outline-none'>
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        placeholder='First Name'
                        className='border p-1.5 text-sm text-gray-600 w-full hover:none focus:border-teal-500 focus:outline-none'
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <div className='text-xs text-red-400'>{formik.errors.firstName}</div>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        placeholder='Last Name'
                        className='border p-1.5 text-sm text-gray-600 w-full hover:none focus:border-teal-500 focus:outline-none'
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className='text-xs text-red-400'>{formik.errors.lastName}</div>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder='Email'
                        className='border p-1.5 text-sm text-gray-600 w-full hover:none focus:border-teal-500 focus:outline-none'
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className='text-xs text-red-400'>{formik.errors.email}</div>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        placeholder='Phone number'
                        className='border p-1.5 text-sm text-gray-600 w-full hover:none focus:border-teal-500 focus:outline-none'
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <div className='text-xs text-red-400'>{formik.errors.phone}</div>
                      )}
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        placeholder='Message'
                        className='border p-1.5 text-sm text-gray-600 w-full hover:none focus:border-teal-500 focus:outline-none'
                      />
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        id="textAlerts"
                        name="textAlerts"
                        onChange={formik.handleChange}
                        checked={formik.values.textAlerts}
                      />
                      <label htmlFor="textAlerts" className='text-xs mx-1'>Text me appointment alerts and reminders.</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        id="emailUpdates"
                        name="emailUpdates"
                        onChange={formik.handleChange}
                        checked={formik.values.emailUpdates}
                      />
                      <label htmlFor="emailUpdates" className='text-xs mx-1'>Email me Brilliant Earth news, updates, and offers.</label>
                    </div>

                    <div>
                      <button type="submit" className='p-2 text-white bg-teal-500 border'>Confirm Appointment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          }
          {/* Section 4 end */}

        </div>

      </div>
    )
  }
