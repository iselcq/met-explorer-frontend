import "./Main.css";
import DepartmentCard from "../DepartmentCard/DepartmentCard";

function Main() {
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
          <DepartmentCard />
          <DepartmentCard />
          <DepartmentCard />
          <DepartmentCard />
          <DepartmentCard />
          <DepartmentCard />
        </div>
      </div>
    </>
  );
}

export default Main;
