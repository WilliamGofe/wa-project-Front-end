import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import DecisionPage from "../pages/DecisionPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import InfosPage from "../pages/InfosPage";
import QuestionsPage from "../pages/QuestionsPage";


function Router(props) {
 const a = 'a'
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route exact path="/decision">
          <DecisionPage info = {a}/>
        </Route>

        <Route exact path="/questions">
          <QuestionsPage/>
        </Route>

        <Route exact path="/infos">
          <InfosPage/>
        
        </Route>       
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
