import React, { useContext, useEffect, useState } from "react";

// Importing styles
import "./styles.sass";

// Contex
import DataContext from "../../contexts/DataContext";

// Utils
import { PAINTING_PER_PAGE } from "../../utils/constants";

const Pagination = () => {
  const { data, currentData, page, setPage, theme } = useContext(DataContext);
  const [totalPages, setTotalPages] = useState(0);

  const handleClickPage = (num) => {
    setPage(num);
  };

  useEffect(() => {
    setTotalPages(
      Math.ceil(
        (!currentData.length ? data : currentData).length / PAINTING_PER_PAGE
      )
    );
  }, [currentData.length, data.length]);

  useEffect(() => {
    setPage(1);
  }, [totalPages]);

  return (
    <div className={`pagination-list ${theme ? "night" : "day"}`}>
      <div className={`${page === 1 ? " arrows-un-active" : ""}`}>
        <a className="border-back" onClick={() => handleClickPage(1)}>
          <img
            src={`/src/assets/${
              theme ? "double_arrow_night" : "double_arrow"
            }.svg`}
            alt="#"
          />
        </a>
        <a onClick={() => setPage(page === 1 ? page : page - 1)}>
          <img
            src={`/src/assets/${theme ? "back_night" : "back"}.svg`}
            alt="#"
          />
        </a>
      </div>

      {[...Array(totalPages).keys()].map((num) => (
        <a
          key={num}
          className={`${page === ++num ? "active" : "un-active"}`}
          onClick={() => handleClickPage(num)}
        >
          {num}
        </a>
      ))}
      <div className={`${page === totalPages ? " arrows-un-active" : ""}`}>
        <a onClick={() => setPage(page === totalPages ? page : page + 1)}>
          <img
            src={`/src/assets/${theme ? "back_night" : "back"}.svg`}
            alt="#"
            style={{ transform: "rotate(180deg)" }}
          />
        </a>
        <a
          className="border-forward"
          onClick={() => handleClickPage(totalPages)}
        >
          <img
            src={`/src/assets/${
              theme ? "double_arrow_night" : "double_arrow"
            }.svg`}
            alt="#"
            style={{ transform: "rotate(180deg)" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Pagination;
