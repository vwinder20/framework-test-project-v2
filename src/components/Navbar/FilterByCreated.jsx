import React, { useContext, useEffect, useState } from "react";

// Contex
import DataContext from "../../contexts/DataContext";
const FilterByCreated = () => {
  // Context
  const { data, setCurrentData } = useContext(DataContext);

  // Setting hook for taking input text "from and before"
  const [from, setFrom] = useState("");
  const [before, setBefore] = useState("");

  // Open & Close author list
  const [open, setOpen] = useState(false);

  // Getting filtered array by search field
  const getFilteredData = () => {
    const newFilteredArray = data.filter(({ created }) => {
      return created >= from && created <= before;
    });
    setCurrentData(from && before === "" ? data : newFilteredArray);
  };
  useEffect(() => {
    getFilteredData();
  }, [from, before]);

  return (
    <div className={`navbar-item ${open ? " opened" : ""}`}>
      <div className="button-wrapper">
        <button onClick={() => setOpen(!open)}>
          <p>Created</p>
        </button>
        <div className="options-wrapper">
          <img src="/src/assets/arrow.svg" alt="" />
        </div>
      </div>

      {open ? (
        <div className="created">
          <form>
            <input
              type="text"
              placeholder="from"
              onChange={(e) => setFrom(e.target.value)}
            />
            <div className="divider" />
            <input
              type="text"
              placeholder="before"
              onChange={(e) => setBefore(e.target.value)}
            />
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default FilterByCreated;
