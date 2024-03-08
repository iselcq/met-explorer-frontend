import "./Main.css";
import DepartmentCard from "../DepartmentCard/DepartmentCard";
import { useNavigate } from "react-router-dom";

function Main(props) {
  const isLoading = props.isLoadingMain;
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
          {props.departmentsArray.map((card) => {
            return (
              <div
                key={card.departmentId}
                onClick={(e) => {
                  e.preventDefault();
                  props.handleDepartmentChange(card);
                  navigate(`/department/${card.departmentId}`);
                }}
              >
                <DepartmentCard card={card} isLoading={isLoading} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
