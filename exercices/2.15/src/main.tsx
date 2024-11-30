import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Page/HomePage";
import App from "./components/App/App";
import CinemaPage from "./components/Page/CinemaPage";
import MovieListPage from "./components/Page/MoviePage";
import AddMoviePage from "./components/Page/AddMoviePage";
import SingleMoviePage from "./components/Page/SingleMoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinemas",
        element: <CinemaPage />,
      },
      {
        path: "movie-list",
        element: <MovieListPage />,
      },
      {
        path: "add-movie",
        element: <AddMoviePage />,
      },
      {
        path: "/movie/:id",
        element : <SingleMoviePage />,
      },
    ],
  }, 
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);