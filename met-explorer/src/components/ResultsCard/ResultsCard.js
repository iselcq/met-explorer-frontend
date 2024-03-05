import { Link } from "react-router-dom";
import "./ResultsCard.css";

function ResultsCard(props) {
  return (
    <>
      <div className="results-card">
        <img
          alt="departamento"
          className="results-card__image"
          src={props.card.primaryImageSmall}
        />
        <p className="results-card__id">ID: {props.card.objectId}</p>
        <h2 className="results-card__title">{props.card.title}</h2>
        <p className="results-card__author">
          {props.card.artistDisplayName
            ? props.card.artistDisplayName
            : "Artist: Unknown"}
        </p>
        <p className="results-card__date">
          {" "}
          {props.card.artistDisplayBio
            ? props.card.artistDisplayBio
            : "Details: Unknown"}
        </p>
        <p className="results-card__url">
          <Link to={props.card.objectURL} className="results-card__url">
            View More...
          </Link>
        </p>
      </div>
    </>
  );
}

export default ResultsCard;
