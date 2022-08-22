import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/marketing-app";
import Header from "./components/header/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;
