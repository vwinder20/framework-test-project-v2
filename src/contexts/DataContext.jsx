import React, { useState } from "react";
import { createContext } from "react";

// Exporting default value of context
export const DataContext = createContext({
  data: [],
  setData: () => [],
  currentData: [],
  setCurrentData: () => [],
});

// Setting up data provider for any components
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [theme, setTheme] = useState(false);
  const value = {
    data,
    setData,
    currentData,
    setCurrentData,
    theme,
    setTheme,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
