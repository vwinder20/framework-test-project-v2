import React, { useContext, useEffect, useMemo, useState } from "react";

// Contex
import DataContext from "../../contexts/DataContext";
const FilterByLocation = () => {
  // Context
  const { data, setCurrentData, theme } = useContext(DataContext);

  // Set location for filtering
  const [location, setLocation] = useState("Location");

  // Open & Close location list
  const [open, setOpen] = useState(false);

  // Getting filtered array by search location
  const getFilteredData = () => {
    const newFilteredArray = data.filter((painting) => {
      return painting.location.includes(location);
    });
    setCurrentData(location === "Location" ? data : newFilteredArray);
  };
  useEffect(() => {
    getFilteredData();
  }, [location]);

  // On click handler for changing current location
  const onClickHandler = (e) => {
    setLocation(e.target.textContent);
    setOpen(!open);
  };

  const onClickReset = (e) => {
    setLocation("Location");
    open ? setOpen(!open) : null;
  };
  return (
    <div className={`navbar__list-item ${open ? " opened" : ""}`}>
      <div className="item__button">
        <button onClick={() => setOpen(!open)}>
          <p>{location}</p>
        </button>
        <div className="item-options">
          {location !== "Location" ? (
            <img
              className="cross"
              src={`/src/assets/${theme ? "cross_night" : "cross"}.svg`}
              alt="#"
              onClick={() => onClickReset()}
            />
          ) : (
            ""
          )}
          <div className="arrow" onClick={() => setOpen(!open)}>
            <img
              src={`/src/assets/${theme ? "arrow_night" : "arrow"}.svg`}
              alt=""
            />
          </div>
        </div>
      </div>

      {open ? (
        <div className="item__drop-down-list">
          <ul>
            {data.map((painting) => {
              return (
                <li
                  key={painting.id}
                  className="drop-down-list__item"
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
