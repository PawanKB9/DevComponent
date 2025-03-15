import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectFilterArray } from '../RTK/Selectors.jsx';

const Filter = () => {
  // The filterArray is taken dynamically from the Redux store
  const filterArray = useSelector(selectFilterArray);

  return (
    <>
      {/* Filter at the top */}
      <div id="filter" className="sticky top-12 inset-0 overflow-auto scrollbar-hide flex space-x-4 p-4 bg-slate-300">
        {filterArray.map((category) => (
          <button key={category} className="bg-gray-100 text-nowrap px-4 py-2 rounded-full hover:shadow-md hover:bg-gray-300 hover:shadow-green-500">
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Filter;