import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";

import { DASHBOARD, DASHBOARD1, DASHBOARD2, DASHBOARD3, DASHBOARD4 } from "./settings/constants";

function App() {
  return (
    <div className="admin-panel">
      <div className="d-flex">
        <BrowserRouter>
          <div className="left-panel">
            <Sidebar />
          </div>
          <div className="right-panel">
            <Switch>
              <Route exact path={DASHBOARD} component={Dashboard} />
              <Route exact path={DASHBOARD1} component={Dashboard} />
              <Route exact path={DASHBOARD2} component={Dashboard} />
              <Route exact path={DASHBOARD3} component={Dashboard} />
              <Route exact path={DASHBOARD4} component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
