

const Item = ({ name, quantity, category }) => {
    return (
      <li className="flex justify-between items-center p-4 border-b border-gray-200">
        <div>
          <span className="font-medium">{name}</span>
          <span className="block text-sm text-gray-500">Category: {category}</span>
        </div>
        <span className="text-gray-600">Qty: {quantity}</span>
      </li>
    );
  };
  
  export default Item;
  