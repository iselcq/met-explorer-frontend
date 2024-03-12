import "./DepartmentCard.css";
import Preloader from "../Preloader/Preloader";
import galleryImage from "../../images/gallery.png";

function DepartmentCard(props) {
  return (
    <>
      <div className="department-card">
        {props.isLoading ? (
          <Preloader fullScreen={false} />
        ) : (
          <>
            <img
              alt="random object from department"
              className="department-card__image"
              src={
                props.card.primaryImageSmall
                  ? props.card.primaryImageSmall
                  : galleryImage
              }
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
