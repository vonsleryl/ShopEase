import React, { useState } from 'react';
import Shopcontent from '../../components/pages/subpages/shopcontent';
import { FaTrashAlt } from 'react-icons/fa'; // Import the trash icon

const Shop = () => {
  const categories = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Beauty & Health',
    'Books',
    'Sports & Outdoors',
  ];

  const initialFilters = [
    { name: 'Best Sellers', selected: false },
    { name: 'New Arrivals', selected: false },
    { name: 'Customer Ratings', selected: false },
    { name: 'Discounts', selected: false },
  ];

  const priceRanges = [
    '$0 - $20',
    '$20 - $50',
    '$50 - $100',
    '$100 - $200',
    '$200+',
  ];

  const [selectedCategories, setSelectedCategories] = useState([]); // Track multiple selected categories
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]); // Track multiple selected price ranges
  const [filters, setFilters] = useState(initialFilters); // Store filters as an array of objects
  const [appliedFilters, setAppliedFilters] = useState({
    categories: [],
    filters: [],
    priceRanges: [],
  });

  // Function to apply filters
  const applyFilters = () => {
    const selectedFilters = filters.filter((filter) => filter.selected).map((filter) => filter.name);
    setAppliedFilters({
      categories: selectedCategories,
      filters: selectedFilters,
      priceRanges: selectedPriceRanges,
    });
  };

  // Function to clear all selections
  const clearAllSelections = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setFilters(initialFilters); // Reset filters
    setAppliedFilters({
      categories: [],
      filters: [],
      priceRanges: [],
    });
  };

  // Check if no filters are applied, and set the condition to display all content
  const shouldShowAllContent =
    appliedFilters.categories.length === 0 &&
    appliedFilters.filters.length === 0 &&
    appliedFilters.priceRanges.length === 0;

  // Check if any filters are selected
  const hasSelectedFilters =
    selectedCategories.length > 0 ||
    filters.some((filter) => filter.selected) ||
    selectedPriceRanges.length > 0;

  // Handle checkbox toggle for categories
  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  // Handle checkbox toggle for filters
  const toggleFilter = (filterName) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.name === filterName
          ? { ...filter, selected: !filter.selected }
          : filter
      )
    );
  };

  // Handle checkbox toggle for price ranges
  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prevSelected) =>
      prevSelected.includes(range)
        ? prevSelected.filter((item) => item !== range)
        : [...prevSelected, range]
    );
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-md hidden md:block">
          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="mr-2"
                  />
                  <span
                    className={`text-gray-700 cursor-pointer ${
                      selectedCategories.includes(category)
                        ? 'font-bold text-blue-600'
                        : ''
                    }`}
                  >
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <ul className="space-y-2">
              {filters.map((filter, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filter.selected}
                    onChange={() => toggleFilter(filter.name)}
                    className="mr-2"
                  />
                  <span
                    className={`text-gray-700 cursor-pointer ${
                      filter.selected ? 'font-bold text-blue-600' : ''
                    }`}
                  >
                    {filter.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div>
            <h2 className="text-xl font-bold mb-4">Price Range</h2>
            <ul className="space-y-2">
              {priceRanges.map((range, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedPriceRanges.includes(range)}
                    onChange={() => togglePriceRange(range)}
                    className="mr-2"
                  />
                  <span
                    className={`text-gray-700 cursor-pointer ${
                      selectedPriceRanges.includes(range)
                        ? 'font-bold text-blue-600'
                        : ''
                    }`}
                  >
                    {range}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply and Clear All Buttons */}
          <div className="mt-8 flex justify-between">
            {/* Conditionally render Apply button */}
            {hasSelectedFilters && (
              <button
                className="w-1/2 bg-blue-500 text-white py-2 px-2 rounded-lg hover:bg-blue-600 text-sm"
                onClick={applyFilters}
              >
                Apply
              </button>
            )}

        {hasSelectedFilters && (
            <button
              className="w-2/2 bg-red-500 text-white py-2 px-2 rounded-lg hover:bg-red-600 flex items-center justify-center text-sm"
              onClick={clearAllSelections}
            >
              <FaTrashAlt className="mr-2" />
              Clear All
            </button>
            )}
          </div>
          
        </div>

        {/* Main content */}
        <Shopcontent
          selectedCategory={appliedFilters.categories}
          selectedFilter={appliedFilters.filters}
          selectedPriceRange={appliedFilters.priceRanges}
          showAllContent={shouldShowAllContent} // Pass condition to shopcontent
        />
      </div>
    </div>
  );
};

export default Shop;
