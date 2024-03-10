import github_logo from "../../images/github_logo.svg";
import "./Footer.css";

const year = new Date();

function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__copyright">
          © {year.getFullYear()} THE MET EXPLORER. <br />
          <a href="https://metmuseum.github.io/#departments">
            Powered by The Metropolitan Museum of Art Collection API
          </a>
        </p>
        <div className="footer__group">
          <p className="footer__practicum">Practicum</p>
          <a href="https://github.com/iselcq/">
            <img
              src={github_logo}
              alt="GitHub logo"
              className="footer__github-logo"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
