import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Budget from "../pages/Budget";
import Expenses from "../pages/Expenses";
import Incomes from "../pages/Incomes";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>

      <Route path="/budgets">
        <Budget />
      </Route>

      <Route path="/expenses">
        <Expenses />
      </Route>

      <Route path="/incomes">
        <Incomes />
      </Route>
    </Switch>
  );
};

export default Routes;
