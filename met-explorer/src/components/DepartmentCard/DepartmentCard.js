import "./DepartmentCard.css";
import Preloader from "../Preloader/Preloader";

// import pruebaCard from "../../images/pruebaCard.png";

function DepartmentCard(props) {
  return (
    <>
      <div className="department-card">
        {props.isLoading ? (
          <Preloader fullScreen={false} />
        ) : (
          <>
            <img
              alt="random object image from department"
              className="department-card__image"
              src={props.card.primaryImageSmall}
            />

            <p className="department-card__number">
              {" "}
              Department #{props.card.departmentId}
            </p>
            <h2 className="department-card__department">
              {props.card.displayName}
            </h2>
          </>
        )}
      </div>
    </>
  );
}

export default DepartmentCard;
