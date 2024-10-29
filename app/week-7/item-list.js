"use client";

import { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

  // Sort the items based on the sortBy state without mutating the original items prop
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      
      {/* Sort buttons */}
      <div className="mb-4">
        <span className="font-bold mr-4">Sort by:</span>
        <button
          className={`mr-2 px-4 py-2 ${sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-red-500'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-red-500'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>

      {/* Render the sorted items for Name or Category */}
      <ul className="divide-y divide-gray-200">
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
