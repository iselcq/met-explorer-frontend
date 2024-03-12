import { Link } from "react-router-dom";

import met_logo from "../../images/the_met_red.png";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="header__title">
          The Met Xplorer
        </Link>
        <a href="https://www.metmuseum.org/">
          <img src={met_logo} alt="THE MET red logo" className="header__logo" />
        </a>
      </header>
    </>
  );
}

export default Header;
