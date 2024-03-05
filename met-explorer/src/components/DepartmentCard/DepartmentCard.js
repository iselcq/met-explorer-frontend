import "./DepartmentCard.css";
import pruebaCard from "../../images/pruebaCard.png";

function DepartmentCard(props) {
  return (
    <>
      <div className="department-card">
        <img
          alt="departamento"
          className="department-card__image"
          src={pruebaCard}
        />
        <p className="department-card__number">
          {" "}
          Department #{props.card.departmentId}
        </p>
        <h2 className="department-card__department">
          {props.card.displayName}
        </h2>
      </div>
    </>
  );
}

export default DepartmentCard;
