// Importing styles
import "./styles.sass";

// Importing components
import FilterBySearch from "./FilterBySearch";
import FilterByAuthor from "./FilterByAuthor";
import FilterByLocation from "./FilterByLocation";
import FilterByCreated from "./FilterByCreated";
const Navbar = () => {
  return (
    <nav className="navbar-list">
      <FilterBySearch />
      <FilterByAuthor />
      <FilterByLocation />
      <FilterByCreated />
    </nav>
  );
};

export default Navbar;
