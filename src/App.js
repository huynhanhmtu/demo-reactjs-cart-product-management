import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "containers/AdminTemplate/LoginPage";
import PageNotFound from "containers/HomeTemplate/PageNotFound";
import { renderRoutesAdmin, renderRoutesHome } from "routes";
import { Suspense } from "react";
import Loading from "components/Loader";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
          <Route path="/login" component={LoginPage} />
          {renderRoutesAdmin()}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;