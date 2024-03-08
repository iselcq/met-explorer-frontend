import ResultsCard from "../ResultsCard/ResultsCard.js";
import Preloader from "../Preloader/Preloader";
import "./DepartmentResults.css";

function DepartmentResults(props) {
  const isLoading = props.isLoadingResults;

  return (
    <>
      <div className="department-results">
        <h1 className="department-results__title">
          {props.selectedDepartment.displayName}
        </h1>
        <div className="department-results__container">
          {isLoading ? (
            <Preloader fullScreen={true} />
          ) : (
            <>
              {props.currentDepartmentObjects.map((card) => {
                return (
                  <ResultsCard
                    card={card}
                    key={card.objectID}
                    isLoading={isLoading}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DepartmentResults;
