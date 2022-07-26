import React from "react";
import "./style.sass";
import DataContext from "../../contexts/DataContext";
import { useContext } from "react";
import { PAINTING_PER_PAGE } from "../../utils/constants";
const Paintings = ({ currentData }) => {
  // Context
  const { page } = useContext(DataContext);
  const startIndex = (page - 1) * PAINTING_PER_PAGE;
  const selectedPaintings = currentData.slice(
    startIndex,
    startIndex + PAINTING_PER_PAGE
  );
  return (
    <section className="paintings-list">
      {selectedPaintings.map(
        ({ id, name, author, location, created, imageUrl }) => {
          return (
            <div className="painting-item" key={id}>
              <img src={`${imageUrl}`} alt="" />
              <div className="painting-description-container">
                <h2 className="painting-title">{name}</h2>
                <div className="painting-subtitle">
                  <p>
                    <span>Author:</span> {author}
                  </p>
                  <p>
                    <span>Created:</span> {created}
                  </p>
                  <p>
                    <span>Location:</span> {location}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

export default Paintings;
