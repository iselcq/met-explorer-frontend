import DepartmentCard from "../DepartmentCard/DepartmentCard";
import "./DepartmentResults.css";

function DepartmentResults() {
  return (
    <>
      <div className="department-results">
        <h1 className="department-results__title">departmentTitle items</h1>
        <div className="department-results__container">
          <DepartmentCard />
          <DepartmentCard />
          <DepartmentCard />
        </div>
      </div>
    </>
  );
}

export default DepartmentResults;
