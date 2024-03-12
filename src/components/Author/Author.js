import isel from "../../images/isel.jpg";
import "./Author.css";

function Author() {
  return (
    <>
      <div className="author">
        <img src={isel} alt="Author" className="author__photo" />

        <div className="author__group">
          <h2 className="author__title">About the author</h2>
          <p className="author__info">
            My name is Isel Castro, I am from Mexico and I am very interested in
            art,in 2021 I had the possibility of visiting the MET Museum at New
            York City and it became one of my museums favorites in the world.
          </p>
          <p className="author__info">
            For this web-app I used HTML, CSS, React, React Router, the native
            library Fetch and as a backend The Metropolitan Museum of Art
            Collection API.
          </p>
        </div>
      </div>
    </>
  );
}

export default Author;
