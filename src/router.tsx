import { Box, useColorModeValue } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BookDetails";
import BookReader from "./pages/BookReader";
import Home from "./pages/Home";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")} minH="100vh">
      <Navbar />
      {children}
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/books",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/books/:id",
    element: (
      <Layout>
        <BookDetails />
      </Layout>
    ),
  },
  {
    path: "/books/:id/read",
    element: (
      <Layout>
        <BookReader />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
], { basename: "/younis" });

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
