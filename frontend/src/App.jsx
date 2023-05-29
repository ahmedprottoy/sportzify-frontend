import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthProvider } from "./context/authContext.jsx";

import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Layout from './pages/layout.jsx'
import HomePage from "./pages/HomePage.jsx";
import Create from "./pages/Create.jsx";
import Profile from "./pages/Profile.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

          <Route path="/*" element={<Layout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="create" element={<Create />} />
            <Route path="profile" element={<Profile />} />
          </Route>
    
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
