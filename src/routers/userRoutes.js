import React, { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));

const userRoutes = [
  {
    path: "/dashboard",
    Element: <Dashboard />,
  },
];
export default userRoutes;
