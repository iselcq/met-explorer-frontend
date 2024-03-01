import github_logo from "../../images/github_logo.svg";
import "./Footer.css";

const year = new Date();

function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__copyright">
          © {year.getFullYear()} THE MET EXPLORER. <br />
          Powered by The Metropolitan Museum of Art Collection API
        </p>
        <p className="footer__practicum">Practicum</p>
        <img
          src={github_logo}
          alt="GitHub logo"
          className="footer__github-logo"
        />
      </footer>
    </>
  );
}

export default Footer;
