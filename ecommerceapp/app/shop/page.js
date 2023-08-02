"use client"
import React, { useState } from 'react';
import DropdownCheckbox from '../components/DropdownCheckbox';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const DropdownCheckboxPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItemsChange = (items) => {
    setSelectedItems(items);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Dropdown Checkbox Example</h1>
      <DropdownCheckbox
        DropTitle={'Company'}
        items={items}
        selectedItems={selectedItems}
        onChange={handleSelectedItemsChange}
      />
    </div>
  );
};

export default DropdownCheckboxPage;
