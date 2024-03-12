import { useEffect } from "react";
import ResultsCard from "../ResultsCard/ResultsCard.js";
import Preloader from "../Preloader/Preloader.js";
import "./DepartmentResults.css";

function DepartmentResults(props) {
  const isLoading = props.isLoadingResults;

  function getId() {
    const urlId = window.location.href;
    const currentId = urlId.split("department/")[1];
    return currentId;
  }

  useEffect(() => {
    if (
      props.currentDepartmentObjects.length < 1 &&
      props.departmentsArray.length > 0
    ) {
      const id = getId();
      props.handleDepartmentChange(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.departmentsArray]);

  return (
    <>
      <div className="department-results">
        <h1 className="department-results__title">
          {props.selectedDepartment.displayName}
        </h1>
        {isLoading ? (
          <Preloader fullScreen={true} />
        ) : (
          <div className="department-results__container">
            {props.currentDepartmentObjects.map((card) => {
              return (
                <ResultsCard
                  card={card}
                  key={card.objectID}
                  isLoading={isLoading}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default DepartmentResults;
