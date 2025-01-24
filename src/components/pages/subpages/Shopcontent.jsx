
import React from 'react';

const Shopcontent = ({ selectedCategory, selectedFilter, selectedPriceRange }) => {
  // Example content based on categories
  const categoryContent = {
    Electronics: [
      { id: 1, name: 'Smartphone', description: 'Latest 5G smartphone with advanced features.' },
      { id: 2, name: 'Laptop', description: 'High-performance laptop for gaming and work.' },
      { id: 3, name: 'Headphones', description: 'Noise-canceling headphones for immersive audio.' },
      { id: 4, name: 'Smartwatch', description: 'Track your fitness and stay connected on the go.' },
      { id: 5, name: 'Camera', description: 'Capture memories with a high-quality DSLR camera.' },
      { id: 6, name: 'Tablet', description: 'Sleek tablet for browsing and entertainment.' },
      { id: 7, name: 'Bluetooth Speaker', description: 'Portable speaker with superior sound quality.' },
    ],
    Fashion: [
      { id: 1, name: 'T-shirt', description: 'Comfortable cotton T-shirts in various styles.' },
      { id: 2, name: 'Jeans', description: 'Durable and trendy denim jeans for all occasions.' },
      { id: 3, name: 'Jacket', description: 'Stylish jackets to keep you warm and fashionable.' },
      { id: 4, name: 'Sneakers', description: 'Modern sneakers for everyday wear.' },
      { id: 5, name: 'Sunglasses', description: 'Protect your eyes and look stylish with our shades.' },
      { id: 6, name: 'Dress', description: 'Elegant dresses for special occasions.' },
      { id: 7, name: 'Watch', description: 'Sleek and sophisticated wristwatches for men and women.' },
    ],
    'Home & Kitchen': [
      { id: 1, name: 'Cookware Set', description: 'Non-stick cookware set for easy cooking.' },
      { id: 2, name: 'Vacuum Cleaner', description: 'Powerful vacuum cleaner for a clean home.' },
      { id: 3, name: 'Air Purifier', description: 'Breathe fresh air with our advanced purifiers.' },
      { id: 4, name: 'Blender', description: 'Multi-purpose blender for smoothies and more.' },
      { id: 5, name: 'Coffee Maker', description: 'Brew your perfect cup of coffee every morning.' },
      { id: 6, name: 'Microwave', description: 'Compact microwave oven for fast heating.' },
      { id: 7, name: 'Dishwasher', description: 'Efficient dishwasher for easy cleaning.' },
    ],
    'Beauty & Health': [
      { id: 1, name: 'Face Cream', description: 'Hydrating face cream for glowing skin.' },
      { id: 2, name: 'Hair Oil', description: 'Nourishing hair oil for strong and shiny hair.' },
      { id: 3, name: 'Vitamins', description: 'Essential vitamins for overall health.' },
      { id: 4, name: 'Makeup Kit', description: 'Complete makeup kit for a flawless look.' },
      { id: 5, name: 'Skincare Set', description: 'Premium skincare products for your routine.' },
      { id: 6, name: 'Shampoo', description: 'Gentle shampoo for smooth, shiny hair.' },
      { id: 7, name: 'Nail Polish', description: 'Long-lasting nail polish in various colors.' },
    ],
    Books: [
      { id: 1, name: 'Fiction', description: 'Engaging stories that spark your imagination.' },
      { id: 2, name: 'Self-Help', description: 'Books to inspire and motivate you.' },
      { id: 3, name: 'Biography', description: 'Explore the lives of remarkable individuals.' },
      { id: 4, name: 'Mystery', description: 'Uncover thrilling mysteries and crime stories.' },
      { id: 5, name: 'Science Fiction', description: 'Futuristic tales of adventure and discovery.' },
      { id: 6, name: 'Romance', description: 'Heartfelt love stories to captivate your emotions.' },
      { id: 7, name: 'History', description: 'Learn about the past with captivating history books.' },
    ],
    'Sports & Outdoors': [
      { id: 1, name: 'Tennis Racket', description: 'High-quality racket for professional players.' },
      { id: 2, name: 'Yoga Mat', description: 'Comfortable and non-slip yoga mats.' },
      { id: 3, name: 'Camping Tent', description: 'Durable tents for outdoor adventures.' },
      { id: 4, name: 'Hiking Boots', description: 'Strong and comfortable boots for hikers.' },
      { id: 5, name: 'Sports Water Bottle', description: 'Stay hydrated during your workouts.' },
      { id: 6, name: 'Fishing Rod', description: 'Durable rod for fishing in various locations.' },
      { id: 7, name: 'Bicycle', description: 'Comfortable and high-quality bicycle for outdoor cycling.' },
    ],
  };

  // Get content for the selected category
  const content = categoryContent[selectedCategory] || [];

  return (
    <div className="md:col-span-3 bg-gray-200 p-6 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Selected Options</h2>
      <p className="text-gray-600 mb-2">Category: {selectedCategory || 'None'}</p>
      <p className="text-gray-600 mb-2">Filter: {selectedFilter || 'None'}</p>
      <p className="text-gray-600 mb-4">Price Range: {selectedPriceRange || 'None'}</p>

      {content.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No content available for this category.</p>
      )}
    </div>
  );
};

export default Shopcontent;
