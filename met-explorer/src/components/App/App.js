import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import Author from "../Author/Author.js";
import DepartmentResults from "../DepartmentResults/DepartmentResults.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/department" element={<DepartmentResults />} />
      </Routes>
      <Author />
      <Footer />
    </>
  );
}

export default App;
