import AboutPage from "../containers/HomeTemplate/AboutPage";
import HomePage from "../containers/HomeTemplate/HomePage";
import HomeTemplate from "../containers/HomeTemplate";
import ListMoviesPage from "../containers/HomeTemplate/ListMoviesPage";

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
  }
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