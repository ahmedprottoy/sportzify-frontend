import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import SignUp from "./pages/signUp.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignIn from "./pages/SignIn.jsx";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
