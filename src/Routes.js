import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Formulario from "./pages/Formulario";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Formulario />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
