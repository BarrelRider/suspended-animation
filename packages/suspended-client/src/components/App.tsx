import * as React from "react";
import { Login} from "../pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/login" component={Login}></Route>
        <Route component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
};
