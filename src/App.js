import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./containers/AdminTemplate/LoginPage";
import PageNotFound from "./containers/HomeTemplate/PageNotFound";
import { renderRoutesAdmin, renderRoutesHome } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome()}
        <Route path="/login" component={LoginPage} />
        {renderRoutesAdmin()}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;