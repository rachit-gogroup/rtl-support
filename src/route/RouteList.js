import { lazy } from "react";

const HomePage = lazy(() =>
  import("../components/homePage/HomePage")
);

export const PUBLIC_ROUTES = [
  {
    id: 1,
    label: 'Landing page',
    path: '/rtl-support',
    element: HomePage
  }
]
