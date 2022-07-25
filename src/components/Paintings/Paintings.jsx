import React from "react";
import "./style.sass";
const Paintings = ({ currentData }) => {
  //   console.log(currentData);
  return (
    <section className="paintings-list">
      {currentData.map(({ id, name, author, location, created, imageUrl }) => {
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
      })}
    </section>
  );
};

export default Paintings;
