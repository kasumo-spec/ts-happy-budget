import { Switch } from "react-router-dom";
import ProtectedRoute from "./protected"

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Budget from "../pages/Budget";
import Expenses from "../pages/Expenses";
import Incomes from "../pages/Incomes";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Tips from "../pages/Tips";

const Routes = () => {
  return (
    <Switch>
      
      <ProtectedRoute exact path="/" component={Home}/>

      <ProtectedRoute path="/login" component={Login}/>

      <ProtectedRoute path="/signup" component={SignUp}/>

      <ProtectedRoute path="/dashboard" component={Dashboard} isPrivate/>

      <ProtectedRoute path="/budgets" component={Budget} isPrivate/>
      
      <ProtectedRoute path="/expenses" component={Expenses} isPrivate/>

      <ProtectedRoute path="/incomes" component={Incomes} isPrivate/>

      <ProtectedRoute path="/tips" component={Tips} isPrivate/>

    </Switch>
  );
};

export default Routes;
