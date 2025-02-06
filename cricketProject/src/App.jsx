import { useEffect, useState } from "react";
import Cricket from "./Cricket";

import { News } from "./News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/cricket",
      element: <Cricket />,
    },
    {
      path: "/news",
      element: <News />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}
