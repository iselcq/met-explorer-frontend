import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Api from "../../utils/api.js";
import "./App.css";
import galleryImage from "../../images/gallery.png";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import Author from "../Author/Author.js";
import DepartmentResults from "../DepartmentResults/DepartmentResults.js";

function App() {
  const [selectedDepartment, setSelectedDepartment] = React.useState({});
  const [departmentsArray, setDepartmentsArray] = React.useState([]);
  const [initialFetchDone, setInitialFetchDone] = React.useState(false);

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const api = new Api();

  function handleDepartmentChange(newDepartment) {
    setSelectedDepartment(newDepartment);
  }

  React.useEffect(() => {
    api.getDepartments().then((res) => {
      setDepartmentsArray(res.departments);
      setInitialFetchDone(true);
    });
  }, []);

  React.useEffect(() => {
    if (initialFetchDone) {
      const updatedDepartments = departmentsArray.map(async (department) => {
        const departmentObjects = await api.getDepartmentObjects(
          department.departmentId
        );
        const random = getRandomElement(departmentObjects.objectIDs);
        const image = await api.getDepartmentImage(random);

        return {
          ...department,
          primaryImageSmall: image.primaryImageSmall
            ? image.primaryImageSmall
            : galleryImage,
        };
      });
      Promise.all(updatedDepartments).then((departmentsWithImages) => {
        setDepartmentsArray(departmentsWithImages);
      });
    }
  }, [initialFetchDone]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              handleDepartmentChange={handleDepartmentChange}
              departmentsArray={departmentsArray}
            />
          }
        />
        <Route
          path="/department/:id"
          element={
            <DepartmentResults selectedDepartment={selectedDepartment} />
          }
        />
      </Routes>
      <Author />
      <Footer />
    </>
  );
}

export default App;
