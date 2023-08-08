"use client"
import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineDown, AiOutlineUp, AiFillCloseCircle, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import products from './data'
import Link from 'next/link';

export default function Shop() {

  const [isOpenComp, setIsOpenComp] = useState(false);
  const [isOpenColor, setIsOpenColor] = useState(false);
  const [isOpenMate, setIsOpenMate] = useState(false);

  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedComapany, setSelectedComapny] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState([]);

  const uniqueCompanies = [...new Set(products.map((product) => product.company))];
  const uniqueMaterial = [...new Set(products.map((product) => product.material))];
  const uniqueColor = [...new Set(products.map((product) => product.color))];

  // Handle changing the sort order
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Handle clicking on a company item in the filter
  const handleCompFilterChange = (item) => {
    const updatedItems = selectedComapany.includes(item) ? selectedComapany.filter((checkedItem) => checkedItem !== item) : [...selectedComapany, item]
    setSelectedComapny(updatedItems);
    console.log({ selectedComapany })
  }

  // Handle clicking on a color item in the filter
  const handleColorFilterChange = (item) => {
    const updatedItems = selectedColor.includes(item)
      ? selectedColor.filter((checkedItem) => checkedItem !== item)
      : [...selectedColor, item];
    setSelectedColor(updatedItems);
    console.log({ selectedColor });
  };

  // Handle clicking on a material item in the filter
  const handleMaterialFilterChange = (item) => {
    const updatedItems = selectedMaterial.includes(item)
      ? selectedMaterial.filter((checkedItem) => checkedItem !== item)
      : [...selectedMaterial, item];
    setSelectedMaterial(updatedItems);
    console.log({ selectedMaterial });
  };

  //Filter products based on selected filters

  const filteredProducts = products.filter(product => {
    const matchesCompany = selectedComapany.length === 0 || selectedComapany.includes(product.company);
    const matchesColor = selectedColor.length === 0 || selectedColor.includes(product.color);
    const matchesMaterial = selectedMaterial.length === 0 || selectedMaterial.includes(product.material);
    return matchesCompany && matchesColor && matchesMaterial;
  });

  // Sort filtered products based on sort order
  const sortedProducts = [...filteredProducts].sort((a,b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div>

      {/* Main heading Start*/}
      <h2 className='my-3 mx-1 md:mt-8 md:mb-3 text-lg md:text-3xl font-medium uppercase text-center font-mono overflow-hidden'>
        Exquisite Jewelry Collection: Elevate Your Style for Every Occasion
      </h2>
      {/* Main heading End*/}

      {/* Filter and search Start */}
      <div className='flex flex-col items-center focus:border-blue-300'>
        {/* Search Bar */}
        <div className='flex items-center md:w-1/2 m-2'>
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

        <div className='flex gap-3 flex-col md:flex-row'>

          {/* Dropdown checkbox for Color */}
          <div>
          <div className={`relative cursor-pointer flex items-center border py-1 px-4 ${selectedColor.length > 1 ? 'gap-3' : 'gap-10'}`} onClick={() => setIsOpenColor(!isOpenColor)}>
            <div className="flex gap-5">
              {selectedColor.length === 0 ? 'Colors' : (
                <>
                  <span>{selectedColor[0]}</span>
                  {selectedColor.length > 1 && (
                    <span className="text-sm text-blue-800 py-1">+{selectedColor.length - 1} more</span>
                  )}
                </>
              )}
            </div>
            {isOpenColor ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {/* Drop down for Color */}
          <div className='absolute bg-white border z-20'>
            {isOpenColor && uniqueColor.map((item) => (
              <label key={item} className='block py-1 px-5 cursor-pointer'>
                <input
                  type='checkbox'
                  className='mr-2 leading-tight'
                  checked={selectedColor.includes(item)}
                  onChange={() => handleColorFilterChange(item)}
                />
                <span className='text-sm'>{item}</span>
              </label>
            ))}
          </div>
          </div>

          {/* Dropdown checkbox for Material */}
          <div>
          <div className={`relative cursor-pointer flex items-center border py-1 px-4 ${selectedMaterial.length > 1 ? 'gap-3' : 'gap-10'}`} onClick={() => setIsOpenMate(!isOpenMate)}>
            <div className="flex gap-5">
              {selectedMaterial.length === 0 ? 'Materials' : (
                <>
                  <span>{selectedMaterial[0]}</span>
                  {selectedMaterial.length > 1 && (
                    <span className="text-sm text-blue-800 py-1">+{selectedMaterial.length - 1} more</span>
                  )}
                </>
              )}
            </div>
            {isOpenMate ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {/* Drop down for Material */}
          <div className='absolute bg-white border z-20'>
            {isOpenMate && uniqueMaterial.map((item) => (
              <label key={item} className='block py-1 px-5 cursor-pointer'>
                <input
                  type='checkbox'
                  className='mr-2 leading-tight'
                  checked={selectedMaterial.includes(item)}
                  onChange={() => handleMaterialFilterChange(item)}
                />
                <span className='text-sm'>{item}</span>
              </label>
            ))}
          </div>
          </div>


          {/* Dropdown checkbox  START*/}
          <div>
          <div className={`relative cursor-pointer flex items-center border py-1 px-4 ${selectedComapany.length > 1 ? 'gap-3' : 'gap-10'}`} onClick={() => setIsOpenComp(!isOpenComp)}>
            <div className="flex gap-5">
              {selectedComapany.length === 0 ? 'Brands' : (
                <>
                  <span>{selectedComapany[0]}</span>
                  {selectedComapany.length > 1 && (
                    <span className="text-sm text-blue-800 py-1">+{selectedComapany.length - 1} more</span>
                  )}
                </>
              )}
            </div>
            {isOpenComp ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {/* Drop down*/}
          <div className='absolute bg-white border z-20'>
            {isOpenComp && uniqueCompanies.map((item) => (
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
          {/* Dropdown checkbox  End*/}


          {/* Sort Order Start */}
          <select
            id='sortOrder'
            onChange={handleSortOrderChange}
            value={sortOrder}
            className='border py-1 px-4'
            aria-label='Sort by Price'
          >
            <option value='asc'>Low to High</option>
            <option value='desc'>High to Low</option>
          </select>
          {/* Sort Order End */}

        </div>
        {/* Filter Three tabs End*/}

      </div>
      {/* Filter and search End */}

      {/* Products */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6'>
        {sortedProducts.map(product => (
          <div key={product.id} className='border p-4'>
            <div className='flex justify-between text-lg'>
            <h3 className='font-semibold p-2'>{product.company} - {product.productName}</h3>
            <AiOutlineHeart className='mt-2.5' />
            </div>
            <Link href={`/productDecp/${product.id}`} className='hover:underline'>
              <div className='aspect-w-3 aspect-h-4'>
                <img
                src={product.src}
                alt={product.productName}
                className='object-cover w-full h-full hover:scale-105'
                />
              </div>
              <p className='font-medium py-2 '>{product.shortDescription}</p>
            </Link>
            <p className='text-gray-600 py-1'>Price: ${product.price}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
