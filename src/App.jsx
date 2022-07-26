// Importing hooks
import React, { useEffect, useState, useContext, Suspense } from "react";

// Importing styles
import "./App.sass";

// Importing components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
const Paintings = React.lazy(() => import("./components/Paintings/Paintings"));
import Pagination from "./components/Pagination";

// Context
import DataContext from "./contexts/DataContext";

function App() {
  // UseContext
  const { data, setData, currentData } = useContext(DataContext);

  // Fetching data
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/paintings");
    const paintings = await response.json();
    setData(paintings);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Pagination
  return (
    <div className="App">
      <Header />
      <Navbar currentData={!currentData.length ? data : currentData} />
      <Suspense fallback={<div>Loading...</div>}>
        <Paintings currentData={!currentData.length ? data : currentData} />
      </Suspense>
      <Pagination />
    </div>
  );
}

export default App;
