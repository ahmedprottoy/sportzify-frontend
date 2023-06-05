import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./context/authContext.jsx";

import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Layout from './pages/layout.jsx'
import HomePage from "./pages/HomePage.jsx";
import Create from "./pages/Create.jsx";
import Profile from "./pages/Profile.jsx";
import Article from "./pages/Article.jsx";
import BlogUpdate from "./components/card/BlogUpdate.jsx";

const queryClient = new QueryClient({
  staleTime:0,
  
});

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
            <Route path="article/:id" element={<Article />} />
            <Route path="article/update/:id" element={<BlogUpdate />} />
          </Route>
        </Routes>
      </AuthProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
