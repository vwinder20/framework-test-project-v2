import React, { useContext, useEffect, useState } from "react";

// Contex
import DataContext from "../../contexts/DataContext";
const FilterByAuthor = () => {
  // Context
  const { data, setCurrentData, theme } = useContext(DataContext);

  // Set author for filtering
  const [author, setAuthor] = useState("Author");

  // Open & Close author list
  const [open, setOpen] = useState(false);

  // Getting filtered array by search field
  const getFilteredData = () => {
    const newFilteredArray = data.filter((painting) => {
      return painting.author.includes(author);
    });
    setCurrentData(author === "Author" ? data : newFilteredArray);
  };
  useEffect(() => {
    getFilteredData();
  }, [author]);

  // On click handler for changing current author
  const onClickHandler = (e) => {
    setAuthor(e.target.textContent);
    setOpen(!open);
  };

  const onClickReset = (e) => {
    setAuthor("Author");
    open ? setOpen(!open) : null;
  };
  return (
    <div className={`navbar-item ${open ? " opened" : ""}`}>
      <div className="button-wrapper">
        <button onClick={() => setOpen(!open)}>
          <p>{author}</p>
        </button>
        <div className="options-wrapper">
          {author !== "Author" ? (
            <img
              src={`/src/assets/${theme ? "cross_night" : "cross"}.svg`}
              alt="#"
              onClick={() => onClickReset()}
            />
          ) : (
            ""
          )}
          <img
            src={`/src/assets/${theme ? "arrow_night" : "arrow"}.svg`}
            alt=""
          />
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
                  {painting.author}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default FilterByAuthor;
