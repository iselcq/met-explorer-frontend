import met_logo from "../../images/the_met_red.png";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <h2 className="header__title">The Met Xplorer</h2>
        <img src={met_logo} alt="THE MET red logo" className="header__logo" />
      </header>
    </>
  );
}

export default Header;
