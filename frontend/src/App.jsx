import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./context/authContext.jsx";

import LoaderOverlay from "./components/common/LoaderOverlay.jsx";

import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Layout from "./pages/layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Create from "./pages/Create.jsx";
import Profile from "./pages/Profile.jsx";

import Article from "./pages/Article.jsx";
import BlogUpdate from "./components/card/BlogUpdate.jsx";
import ErrorNotFound from "./pages/ErrorNotFound.jsx";
import PrivateRoutes from "./components/route/PrivateRoutes.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
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
            <Route path="article/:id" element={<Article />} />

            <Route element={<PrivateRoutes />}>
              <Route path="create" element={<Create />} />
            <Route path="profile/:username" element={<Profile />} />
            <Route path="article/update/:id" element={<BlogUpdate />} />
            </Route>

            <Route path="*" element={<ErrorNotFound />} />
          </Route>
        </Routes>
      </AuthProvider>

      <LoaderOverlay />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
