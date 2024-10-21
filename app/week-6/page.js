// /app/week-3/page.js
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping List</h1>
      <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-lg">
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
