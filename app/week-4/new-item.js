
"use client";

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:bg-gray-200 disabled:text-gray-400"
      >
        -
      </button>
      <span className="text-xl font-semibold">{quantity}</span>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:bg-gray-200 disabled:text-gray-400"
      >
        +
      </button>
    </div>
  );
}
