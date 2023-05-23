import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp.jsx";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
