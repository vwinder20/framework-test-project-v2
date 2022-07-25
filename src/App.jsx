// Importing hooks
import React, { useEffect, useState, useContext, Suspense } from "react";

// Importing styles
import "./App.sass";

// Importing components
import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Paintings from "./components/Paintings";

const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Paintings = React.lazy(() => import("./components/Paintings/Paintings"));

// Context
import DataContext from "./contexts/DataContext";

function App() {
  // UseContext
  const { data, setData, currentData } = useContext(DataContext);

  // Fetching data
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/paintings");
    const paintings = await response.json();
    console.log(paintings);
    setData(paintings);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Navbar currentData={!currentData.length ? data : currentData} />
        <Paintings currentData={!currentData.length ? data : currentData} />
      </Suspense>
      {/* <Navbar currentData={!currentData.length ? data : currentData} />
      <Paintings currentData={!currentData.length ? data : currentData} /> */}
    </div>
  );
}

export default App;
