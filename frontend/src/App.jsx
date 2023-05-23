import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
