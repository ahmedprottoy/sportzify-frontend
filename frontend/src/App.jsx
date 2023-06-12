import React,{lazy,Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./context/authContext.jsx";

import LoaderOverlay from "./components/common/LoaderOverlay.jsx";

const SignUp = lazy(() => import("./pages/SignUp.jsx"));
const SignIn = lazy(() => import("./pages/SignIn.jsx"));
const Layout = lazy(() => import("./pages/layout.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const Create = lazy(() => import("./pages/Create.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const Article = lazy(() => import("./pages/Article.jsx"));
const BlogUpdate = lazy(() => import("./components/card/BlogUpdate.jsx"));
const ErrorNotFound = lazy(() => import("./pages/ErrorNotFound.jsx"));
const PrivateRoutes = lazy(() => import("./components/route/PrivateRoutes.jsx"));



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
        </Suspense>
      </AuthProvider>

      <LoaderOverlay />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
