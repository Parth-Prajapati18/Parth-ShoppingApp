"use client"
import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineDown, AiOutlineUp, AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import products from './data'

export default function Shop() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedComapany, setSelectedComapny] = useState([]);
  const uniqueCompanies = ['All Brands', 1, 3, ...new Set(products.map((product) => product.company))];

  // Handle clicking on a company item in the filter
  const handleCompFilterChange = (item) => {
    const updatedItems = selectedComapany.includes(item) ? selectedComapany.filter((checkedItem)=> checkedItem !== item ) : [...selectedComapany, item]
    setSelectedComapny(updatedItems);
    console.log({selectedComapany})
  }

  return (
    <div>
      <h2 className='my-3 mx-1 md:mt-8 md:mb-3 text-lg md:text-3xl font-medium uppercase text-center font-mono overflow-hidden'>
        Exquisite Jewelry Collection: Elevate Your Style for Every Occasion
      </h2>

      <div className='flex flex-col items-center focus:border-blue-300'>
        {/* Search Bar */}
        <div className='flex items-center w-1/2 m-2'>
          <input
            type='text'
            placeholder='Search by Product Name...'
            className='w-11/12 p-2 border'
            aria-label='Search'
          />
          <button className='inset-y-0 left-0 item-center border p-2 text-2xl' aria-label='Search'>
            <AiOutlineSearch />
          </button>
        </div>

        {/* Filter Three tabs   */}
        <div>
          {/* Dropdown checkbox */}
          <div className='inline-block' tabIndex="100">
            <div className='relative cursor-pointer flex justify-between gap-10 items-center border py-1 px-4' onClick={()=>setIsOpen(!isOpen)}>
              { selectedComapany.length === 0 ? 'Brands' : `${selectedComapany[0]}`}
              { isOpen ? <AiOutlineUp /> : <AiOutlineDown /> }
            </div>

            <div className='absolute bg-white border mt-1'>

              { isOpen && uniqueCompanies.map((item) => (
                <label key={item} className='block py-1 px-5 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='mr-2 leading-tight'
                    checked={selectedComapany.includes(item)}
                    onChange={() => handleCompFilterChange(item)}
                  />
                  <span className='text-sm'>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
