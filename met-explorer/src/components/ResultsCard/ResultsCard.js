import { Link } from "react-router-dom";

import notFoundImg from "../../images/imageNotFound.jpg";
import "./ResultsCard.css";

function ResultsCard(props) {
  return (
    <>
      <div className="results-card">
        <img
          alt="departamento"
          className="results-card__image"
          src={
            props.card.primaryImageSmall
              ? props.card.primaryImageSmall
              : notFoundImg
          }
        />
        <div className="results-card__info">
          <p className="results-card__id">ID: {props.card.objectID}</p>
          <Link to={props.card.objectURL} className="results-card__url">
            View More
          </Link>
        </div>
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
        <p className="results-card__url"></p>
      </div>
    </>
  );
}

export default ResultsCard;
