import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./context/authContext";

import LoaderOverlay from "./components/common/LoaderOverlay";

const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Layout = lazy(() => import("./pages/Layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Create = lazy(() => import("./pages/Create"));
const Profile = lazy(() => import("./pages/Profile"));
const Article = lazy(() => import("./pages/Article"));
const BlogUpdate = lazy(() => import("./components/card/BlogUpdate"));
const ErrorNotFound = lazy(() => import("./pages/ErrorNotFound"));
const PrivateRoutes = lazy(() => import("./components/route/PrivateRoutes"));

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
        <Suspense fallback={<LoaderOverlay />}>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />

            <Route path="/*" element={<Layout />}>
              <Route path="" element={<HomePage />} />
              <Route path="article/:id" element={<Article />} />

              <Route element={<PrivateRoutes />}>
                <Route path="create" element={<Create />} />
                <Route path="profile/:username" element={<Profile />} />
                <Route path="article/update/:id" element={<BlogUpdate />} />
              </Route>

              <Route path="*" element={<ErrorNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>

      <LoaderOverlay />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
