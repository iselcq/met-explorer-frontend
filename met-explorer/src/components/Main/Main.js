import "./Main.css";
import DepartmentCard from "../DepartmentCard/DepartmentCard";
import { Link, useNavigate } from "react-router-dom";
import departmentsArray from "../../arregloPrueba.json";

function Main(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <h1 className="main__title">
          Xplore The MET and travel around the world
        </h1>
        <h4 className="main__subtitle">
          Select a department and browse the Art
        </h4>
        <div className="main__container">
          {departmentsArray.map((card) => {
            return (
              <Link
                to={`/department/${card.departmentId}`}
                onClick={(e) => {
                  e.preventDefault();
                  props.handleDepartmentChange(card);
                  navigate(`/department/${card.departmentId}`);
                }}
              >
                <DepartmentCard card={card} key={card.departmentId} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
