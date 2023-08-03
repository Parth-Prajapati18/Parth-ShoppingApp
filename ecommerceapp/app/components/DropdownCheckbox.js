import React, { useState, useEffect, useRef } from 'react';
import {AiOutlineDown, AiOutlineUp, AiFillCloseCircle} from 'react-icons/ai'

export default function DropdownCheckbox({ DropTitle, items, selectedItems, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClearSelection = () => {
    onChange([]);
  };

  const handleItemClick = (item) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];

    onChange(updatedItems);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={dropdownRef} className='relative'>
      <div
        type='button'
        className={`w-auto flex justify-between mx-2 py-2 pl-3 pr-10 text-left ${selectedItems.length > 0 ? 'bg-blue-200 border-blue-300 text-blue-500 font-normal' : 'bg-white border'
          } border shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
        onClick={handleToggle}
      >
        <div>
          {selectedItems.length === 0 ? DropTitle : `${selectedItems[0]}${selectedItems.length > 1 ? `+${selectedItems.length - 1}` : ''}`}
        </div>

        <div>
          {selectedItems.length > 0 && (
           <AiFillCloseCircle onClick={handleClearSelection}/>
          )}

          {isOpen ? (
            <AiOutlineUp className={`${selectedItems.length > 0 ? 'hidden' : ''}`} />
           
          ) : (
            <AiOutlineDown className={`${selectedItems.length > 0 ? 'hidden' : ''}`} /> 
          )}
        </div>


      </div>

      {isOpen && (
        <div className='absolute w-full mt-2 bg-white border border-blue-300 shadow-md'>
          {items.map((item) => (
            <label key={item} className='block p-2 cursor-pointer'>
              <input
                type='checkbox'
                className='mr-2 leading-tight'
                checked={selectedItems.includes(item)}
                onChange={() => handleItemClick(item)}
              />
              <span className='text-sm'>{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
