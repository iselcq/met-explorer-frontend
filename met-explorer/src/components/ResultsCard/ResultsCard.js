import { Link } from "react-router-dom";
import "./ResultsCard.css";

function ResultsCard(props) {
  return (
    <>
      <div className="department-card">
        <img
          alt="departamento"
          className="department-card__image"
          src={props.card.primaryImageSmall}
        />
        <p className="department-card__number">ID: {props.card.objectId}</p>
        <h2 className="department-card__department">{props.card.title}</h2>
        <p className="department-card__author">
          {props.card.artistDisplayName
            ? props.card.artistDisplayName
            : "Artist: Unknown"}
        </p>
        <p className="department-card__date">
          {" "}
          {props.card.artistDisplayBio
            ? props.card.artistDisplayBio
            : "Details: Unknown"}
        </p>
        <p className="department-card__url">
          <Link to={props.card.objectURL} className="department-card__url">
            View More...
          </Link>
        </p>
      </div>
    </>
  );
}

export default ResultsCard;
