// Importing styles
import "./styles.sass";

// Importing components
import FilterBySearch from "./FilterBySearch";
import FilterByAuthor from "./FilterByAuthor";
import FilterByLocation from "./FilterByLocation";
import FilterByCreated from "./FilterByCreated";

// Context
import DataContext from "../../contexts/DataContext";
import { useContext } from "react";
const Navbar = () => {
  const { theme } = useContext(DataContext);
  return (
    <nav className={`navbar-list ${theme ? "night-theme" : "day-theme"}`}>
      <FilterBySearch />
      <FilterByAuthor />
      <FilterByLocation />
      <FilterByCreated />
    </nav>
  );
};

export default Navbar;
