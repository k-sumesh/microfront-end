import React from "react";

import { Switch, Route, Router } from "react-router-dom";
import { StyleProvider } from "@material-ui/core/styles";

import Landing from "./marketing-components/components/Landing";
import Pricing from "./marketing-components/components/Pricing";

const App = ({ history }) => {
  return (
    <div>
      {/* <StyleProvider> */}
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
      {/* </StyleProvider> */}
    </div>
  );
};

export default App;
