import React, { lazy } from "react";

const MainPage = lazy(() => import("@/pages/MainPage"));

const publicRoutes = [
  {
    path: "/",
    Element: <MainPage />,
  },
];
export default publicRoutes;
