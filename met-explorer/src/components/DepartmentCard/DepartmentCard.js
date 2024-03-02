import "./DepartmentCard.css";
import pruebaCard from "../../images/pruebaCard.png";

function DepartmentCard() {
  return (
    <>
      <div className="department-card">
        <img
          alt="departamento"
          className="department-card__image"
          src={pruebaCard}
        />
        <p className="department-card__number"># items: 34</p>
        <h2 className="department-card__department">
          American Decorative Arts
        </h2>
      </div>
    </>
  );
}

export default DepartmentCard;
