import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import Author from "../Author/Author.js";
import DepartmentResults from "../DepartmentResults/DepartmentResults.js";

function App() {
  const [selectedDepartment, setSelectedDepartment] = React.useState({});

  function handleDepartmentChange(newDepartment) {
    console.log(newDepartment);
    setSelectedDepartment(newDepartment);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Main handleDepartmentChange={handleDepartmentChange} />}
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
