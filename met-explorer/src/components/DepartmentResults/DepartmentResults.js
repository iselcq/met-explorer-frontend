import ResultsCard from "../ResultsCard/ResultsCard.js";
import testArray from "../../parregloPruebaObjetos.json";
import "./DepartmentResults.css";

function DepartmentResults(props) {
  return (
    <>
      <div className="department-results">
        <h1 className="department-results__title">
          {props.selectedDepartment.displayName}
        </h1>
        <div className="department-results__container">
          {testArray.map((card) => {
            return <ResultsCard card={card} key={card.objectId} />;
          })}
        </div>
      </div>
    </>
  );
}

export default DepartmentResults;
