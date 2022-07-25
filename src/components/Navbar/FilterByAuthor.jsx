import React, { useContext, useEffect, useState } from "react";

// Contex
import DataContext from "../../contexts/DataContext";
const FilterByAuthor = () => {
  // Context
  const { data, setCurrentData } = useContext(DataContext);

  // Set author for filtering
  const [author, setAuthor] = useState("Author");

  // Open & Close author list
  const [open, setOpen] = useState(false);

  // Getting filtered array by search field
  const getFilteredData = () => {
    const newFilteredArray = data.filter((painting) => {
      return painting.author.toLowerCase().includes(author);
    });
    setCurrentData(newFilteredArray);
  };
  useEffect(() => {
    getFilteredData();
  }, [author]);

  return (
    <div className={`navbar-item ${open ? " opened" : ""}`}>
      <button onClick={() => setOpen(!open)}>{author}</button>
      {open ? (
        <div className="drop-down-list">
          <ul>
            {data.map((painting) => {
              return <li className="drop-down-item">{painting.author}</li>;
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default FilterByAuthor;
