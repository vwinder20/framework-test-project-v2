import React, { useContext, useEffect, useState } from "react";

// Contex
import DataContext from "../../contexts/DataContext";
const FilterBySearch = () => {
  // Context
  const { data, setCurrentData } = useContext(DataContext);

  // Taking letter from search field
  const [searchField, setSearchField] = useState("");

  // Getting filtered array by search field
  const getFilteredData = () => {
    const newFilteredArray = data.filter((painting) => {
      return painting.name.toLowerCase().includes(searchField);
    });
    setCurrentData(newFilteredArray);
  };
  useEffect(() => {
    getFilteredData();
  }, [searchField]);

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Name"
        onChange={(e) => setSearchField(e.target.value)}
      />
    </div>
  );
};

export default FilterBySearch;
