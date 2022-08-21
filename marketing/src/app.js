import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StyleProvider } from "@material-ui/core/styles";

import Landing from "./marketing-components/components/Landing";
import Pricing from "./marketing-components/components/Pricing";

const App = () => {
  return (
    <div>
      {/* <StyleProvider> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
      {/* </StyleProvider> */}
    </div>
  );
};

export default App;
