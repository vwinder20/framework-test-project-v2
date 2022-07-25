// Importing hooks
import { useEffect, useState, useContext } from "react";

// Importing styles
import "./App.sass";

// Importing components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Paintings from "./components/Paintings";

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
      <Navbar currentData={!currentData.length ? data : currentData} />
      <Paintings currentData={!currentData.length ? data : currentData} />
    </div>
  );
}

export default App;
