import React from "react";
import "./style.sass";
import DataContext from "../../contexts/DataContext";
import { useContext } from "react";
import { PAINTING_PER_PAGE } from "../../utils/constants";
import PaintingItem from "../PaintingItem";

const PaintingsList = ({ currentData }) => {
  // Context
  const { page } = useContext(DataContext);
  const startIndex = (page - 1) * PAINTING_PER_PAGE;
  const selectedPaintings = currentData.slice(
    startIndex,
    startIndex + PAINTING_PER_PAGE
  );

  return (
    <section className="paintings-list">
      {selectedPaintings.map((paintingItem) => {
        return (
          <PaintingItem key={paintingItem.id} paintingItem={paintingItem} />
        );
      })}
    </section>
  );
};

export default PaintingsList;
