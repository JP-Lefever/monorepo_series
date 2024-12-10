import { createBrowserRouter } from "react-router-dom";
import Programs from "../src/pages/Programs";
import App from "./App";

export const mainRouter = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />, // Renders the App component for the home page
  },
  {
    path: "/programs",
    element: <Programs />,
    loader: () => fetch(`${import.meta.env.VITE_API_MOVIE_DATA}`),
  },
  // Try adding a new route! For example, "/about" with an About component
]);
