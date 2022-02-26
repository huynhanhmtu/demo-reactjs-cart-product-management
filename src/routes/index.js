import AboutPage from "../containers/HomeTemplate/AboutPage";
import HomePage from "../containers/HomeTemplate/HomePage";
import ProductsPage from "../containers/HomeTemplate/ProductsPage";
import HomeTemplate from "../containers/HomeTemplate";

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
    path: "/products",
    component: ProductsPage
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