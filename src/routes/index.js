import HomeTemplate from "containers/HomeTemplate";
import AdminTemplate from "containers/AdminTemplate";

import { lazy } from "react";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("containers/HomeTemplate/HomePage"))
  },
  {
    exact: true,
    path: "/demo-reactjs-movie",
    component: lazy(() => import("containers/HomeTemplate/HomePage"))
  },
  {
    exact: true,
    path: "/about",
    component: lazy(() => import("containers/HomeTemplate/AboutPage"))
  },
  {
    exact: true,
    path: "/list-movies",
    component: lazy(() => import("containers/HomeTemplate/ListMoviesPage"))
  },
  {
    exact: true,
    path: "/detail/:id",
    component: lazy(() => import("containers/HomeTemplate/DetailMoviePage"))
  },
];

const routesAdmin = [
  {
    exact: true,
    path: "/dashboard",
    component: lazy(() => import("containers/AdminTemplate/DashboardPage"))
  },
  {
    exact: true,
    path: "/add-user",
    component: lazy(() => import("containers/AdminTemplate/AddUserPage"))
  },
]

export const renderRoutesHome = () => {
  return routesHome.map((route, index) => {
    return <HomeTemplate
      key={index}
      exact={route.exact}
      path={route.path}
      component={route.component}
    />
  })
}

export const renderRoutesAdmin = () => {
  return routesAdmin.map((route, index) => {
    return <AdminTemplate
      key={index}
      exact={route.exact}
      path={route.path}
      component={route.component}
    />
  })
}