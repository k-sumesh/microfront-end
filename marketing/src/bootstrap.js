import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
const rootElement = document.getElementById("root");

export const mount = (el) => {
  return ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  if (rootElement) mount(rootElement);
}

// export const Index = App;

export const MyApp = () => <App />;
