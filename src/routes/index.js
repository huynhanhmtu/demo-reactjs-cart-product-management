import AboutPage from "containers/HomeTemplate/AboutPage";
import HomePage from "containers/HomeTemplate/HomePage";
import HomeTemplate from "containers/HomeTemplate";
import ListMoviesPage from "containers/HomeTemplate/ListMoviesPage";
import DetailMoviePage from "containers/HomeTemplate/DetailMoviePage";
import AdminTemplate from "containers/AdminTemplate";
import DashboardPage from "containers/AdminTemplate/DashboardPage"
import AddUserPage from "containers/AdminTemplate/AddUserPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage
  },
  {
    exact: false,
    path: "/list-movies",
    component: ListMoviesPage
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMoviePage
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage
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