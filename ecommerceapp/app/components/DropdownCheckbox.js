"use client"
import React, { useState } from 'react'

export default function DropdownCheckbox({ DropTitle, items, selectedItems, onChange }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (item) => {
    const isChecked = selectedItems.includes(item);
    const updatedItems = isChecked
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];

    onChange(updatedItems);
  };

  return (
    <div className='relative'>
      <button
        type="button"
        className='w-full py-2 pl-3 pr-10 text-left bg-white border shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        onClick={handleToggle}
      >
        {selectedItems.length === 0
          ? DropTitle
          : `${selectedItems[0]}${selectedItems.length > 1 ? ` (+${selectedItems.length - 1})` : ''}`}
      </button>

      { isOpen && (
        <div className='absolute w-full mt-2 bg-white border shadow-md'>
          {items.map((item) => (
            <label
              key={item}
              className="block px-4 py-2 text-sm cursor-pointer select-none"
            >
              <input
                type="checkbox"
                className="mr-2 leading-tight"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          ))}
        </div>
      )}

    </div>
  )
}
