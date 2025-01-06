import { createBrowserRouter } from "react-router-dom";
import Programs from "../src/pages/Programs";
import App from "./App";

import CategoryIndex from "./pages/CategoryIndex";
import CategoryDetails from "./pages/CategoryDetails";
import ProgramsDetails from "./pages/ProgramsDetails";
import CategoryNew from "./pages/CategoryNew";
import CategoryEdit from "./pages/CategoryEdit";
import Home from "./pages/Home";
import ProgramAdd from "./pages/ProgramAdd";
import ProgramEdit from "./pages/ProgramEdit";

export const mainRouter = createBrowserRouter([
  {
    element: <App />, // Renders the App component for the home page
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/programs",
        element: <Programs />,
        loader: () => fetch(`${import.meta.env.VITE_API_MOVIE_DATA}`),
      },
      {
        path: "/categories",
        element: <CategoryIndex />,
      },
      { path: "/categories/:id", element: <CategoryDetails /> },
      { path: "/programs/:id", element: <ProgramsDetails /> },
      { path: "/categories/new", element: <CategoryNew /> },
      { path: "/categories/:id/edit", element: <CategoryEdit /> },
      { path: "/programs/add", element: <ProgramAdd /> },
      { path: "/programs/:id/edit", element: <ProgramEdit /> },
    ],
  },

  // Try adding a new route! For example, "/about" with an About component
]);
