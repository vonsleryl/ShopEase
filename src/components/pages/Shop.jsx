import React from 'react';

const Shop = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$20.00', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$35.00', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$15.00', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$50.00', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$25.00', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: '$30.00', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">TEMPORARY!!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700 mt-2">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
