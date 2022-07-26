import React, { useContext, useEffect, useState } from "react";

// Contex
import DataContext from "../../contexts/DataContext";
const FilterByLocation = () => {
  // Context
  const { data, setCurrentData } = useContext(DataContext);

  // Set author for filtering
  const [location, setLocation] = useState("Location");

  // Open & Close author list
  const [open, setOpen] = useState(false);

  // Getting filtered array by search field
  const getFilteredData = () => {
    const newFilteredArray = data.filter((painting) => {
      return painting.location.includes(location);
    });
    setCurrentData(location === "Location" ? data : newFilteredArray);
  };
  useEffect(() => {
    getFilteredData();
  }, [location]);

  // On click handler for changing current author
  const onClickHandler = (e) => {
    setLocation(e.target.textContent);
    setOpen(!open);
  };

  const onClickReset = (e) => {
    setLocation("Location");
    open ? setOpen(!open) : null;
  };
  return (
    <div className={`navbar-item ${open ? " opened" : ""}`}>
      <div className="button-wrapper">
        <button onClick={() => setOpen(!open)}>
          <p>{location}</p>
        </button>
        <div className="options-wrapper">
          {location !== "Location" ? (
            <img
              src="/src/assets/cross.svg"
              alt="#"
              onClick={() => onClickReset()}
            />
          ) : (
            ""
          )}
          <img src="/src/assets/arrow.svg" alt="" />
        </div>
      </div>

      {open ? (
        <div className="drop-down-list">
          <ul>
            {data.map((painting) => {
              return (
                <li
                  key={painting.id}
                  className="drop-down-item"
                  onClick={(e) => onClickHandler(e)}
                >
                  {painting.location}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default FilterByLocation;
