"use client"; // Add this at the top

import { useState } from 'react';
import Item from './item';
import items from './items.json'; // Import items from JSON file

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  // Sort the items based on the sortBy state
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
          className={`mr-2 px-4 py-2 ${sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-red-500'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
        <button
          className={`px-4 py-2 ${sortBy === 'grouped' ? 'bg-orange-500 text-white' : 'bg-red-500'}`}
          onClick={() => setSortBy('grouped')}
        >
          Grouped Category
        </button>
      </div>

      {/* Grouped by Category (Optional Challenge) */}
      {sortBy === 'grouped' && (
        <div>
          {Object.entries(groupItemsByCategory(sortedItems)).map(([category, items]) => (
            <div key={category}>
              <h2 className="capitalize text-lg font-bold mt-4">{category}</h2>
              <ul className="divide-y divide-gray-200">
                {items.map((item, index) => (
                  <li key={index} className="py-2">
                    {item.name} <br />
                    <span className="italic">Buy {item.quantity} in {category}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Render the sorted items for Name or Category */}
      {sortBy !== 'grouped' && (
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
      )}
    </div>
  );
};

// Helper function to group items by category
const groupItemsByCategory = (items) => {
  return items.reduce((grouped, item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
    return grouped;
  }, {});
};

export default ItemList;
