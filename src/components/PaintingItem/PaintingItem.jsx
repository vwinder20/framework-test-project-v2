import React from "react";
import "./styles.sass";

const PaintingItem = ({ paintingItem }) => {
  const { name, author, location, created, imageUrl } = paintingItem;
  return (
    <div className="painting-item">
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
};

export default PaintingItem;
