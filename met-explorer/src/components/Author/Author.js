import isel from "../../images/isel.jpeg";
import "../Author/Author.css";

function Author() {
  return (
    <>
      <div className="author">
        <img src={isel} alt="Author photo" className="author__photo" />

        <div className="author__group">
          <h2 className="author__title">About the author</h2>
          <p className="author__info">
            Este bloque describe al autor del proyecto. Aquí debe indicar tu
            nombre, a qué te dedicas y qué tecnologías de desarrollo conoces.
          </p>
          <p className="author__info">
            También puedes hablar de tu experiencia con Practicum, de lo que
            aprendiste allí y de cómo puedes ayudar a los clientes potenciales.
          </p>
        </div>
      </div>
    </>
  );
}

export default Author;
