"use client";

import Link from "next/link";
import { useState } from "react";
import publicRoutes from "@/routers/publicRoutes";
import userRoutes from "@/routers/userRoutes";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const routes = authenticated
    ? [...publicRoutes, ...userRoutes]
    : publicRoutes;

  const currentRoute = routes.find((route) => route.path === currentPath);
  console.log("Current Route:", currentRoute);

  return (
    <div>
      {currentRoute ? currentRoute.element : <p>Error Route Component</p>}
    </div>
  );
}
