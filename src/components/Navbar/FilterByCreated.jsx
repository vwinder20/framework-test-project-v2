import React, { useContext, useEffect, useState } from "react";

// Contex
import DataContext from "../../contexts/DataContext";
const FilterByCreated = () => {
  // Context
  const { data, setCurrentData, theme } = useContext(DataContext);

  // Setting hook for taking input text "from and before"
  const [from, setFrom] = useState(0);
  const [before, setBefore] = useState(new Date().getFullYear());

  // Open & Close created
  const [open, setOpen] = useState(false);

  // Getting filtered array by created
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
          <div className="arrow" onClick={() => setOpen(!open)}>
            <img
              src={`/src/assets/${theme ? "arrow_night" : "arrow"}.svg`}
              alt=""
            />
          </div>
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
