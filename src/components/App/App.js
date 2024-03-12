import React from "react";
import { Route, Routes } from "react-router-dom";
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
  const [, setDepartmentObjects] = React.useState([]);
  const [currentDepartmentObjects, setCurrentDepartmentObjects] =
    React.useState([]);
  const [isLoadingMain, setIsLoadingMain] = React.useState(true);
  const [isLoadingResults, setIsLoadingResults] = React.useState(true);

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const api = new Api();

  function handleDepartmentChange(newDepartmentId) {
    setCurrentDepartmentObjects([]);
    setIsLoadingResults(true);
    const newDepartment = departmentsArray.find((dept) => {
      return dept.departmentId == newDepartmentId;
    });
    if (!newDepartment) return;
    setSelectedDepartment(newDepartment);
    api.getDepartmentObjects(newDepartment.departmentId).then((res) => {
      setDepartmentObjects(res.objectIDs);
      const objectsList = res.objectIDs.slice(0, 15).map(async (id) => {
        const objectElement = await api.getDepartmentObjectById(id);

        return objectElement;
      });
      Promise.all(objectsList)
        .then((res) => {
          setCurrentDepartmentObjects(res);
          setIsLoadingResults(false);
        })
        .catch((err) => {
          setIsLoadingResults(false);
          console.log(err.name);
        });
    });
  }

  React.useEffect(() => {
    document.title = "MET XPLORER";
  }, []);

  React.useEffect(() => {
    setIsLoadingMain(true);
    api
      .getDepartments()
      .then((res) => {
        setDepartmentsArray(res.departments);
        setInitialFetchDone(true);
      })
      .catch((err) => {
        console.log(err);
        alert("There was a problem fetching the data, please try again.");
      });
  }, []);

  React.useEffect(() => {
    if (initialFetchDone) {
      const updatedDepartments = departmentsArray.map(async (department) => {
        const departmentObjects = await api.getDepartmentObjects(
          department.departmentId
        );
        const random = getRandomElement(departmentObjects.objectIDs);
        const image = await api.getDepartmentObjectById(random);

        return {
          ...department,
          primaryImageSmall: image.primaryImageSmall
            ? image.primaryImageSmall
            : galleryImage,
        };
      });
      Promise.all(updatedDepartments)
        .then((departmentsWithImages) => {
          setDepartmentsArray(departmentsWithImages);
          setIsLoadingMain(false);
        })
        .catch((err) => {
          console.log(err.name);
          setIsLoadingMain(false);
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
              isLoadingMain={isLoadingMain}
            />
          }
        />
        <Route
          path="/department/:id"
          element={
            <DepartmentResults
              departmentsArray={departmentsArray}
              handleDepartmentChange={handleDepartmentChange}
              selectedDepartment={selectedDepartment}
              currentDepartmentObjects={currentDepartmentObjects}
              isLoadingResults={isLoadingResults}
            />
          }
        />
      </Routes>
      <Author />
      <Footer />
    </>
  );
}

export default App;
