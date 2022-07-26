import React, { useState } from "react";
import { createContext } from "react";

// Exporting default value of context
export const DataContext = createContext({
  data: [],
  setData: () => [],
  currentData: [],
  setCurrentData: () => [],
  page: 1,
  setPage: null,
});

// Setting up data provider for any components
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [page, setPage] = useState(1);
  const [theme, setTheme] = useState(false);
  const value = {
    data,
    setData,
    currentData,
    setCurrentData,
    theme,
    setTheme,
    page,
    setPage,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
