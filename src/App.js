import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/HomeTemplate/PageNotFound";
import { renderRoutesHome } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome()}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;