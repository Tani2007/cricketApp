import { useEffect, useState } from "react";
import Cricket from "./Cricket";

import { News } from "./News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cricket",
      element: <Cricket />,
    },
    {
      path: "/news",
      element: <News />,
    },
  ]);
  return <RouterProvider router={router} />;
}
