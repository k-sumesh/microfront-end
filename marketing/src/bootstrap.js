import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createMemoryHistory, createBrowserHistory } from "history";
const rootElement = document.getElementById("root");

export const mount = (el, { onNavigate, useDefaultHistory }) => {
  const history = useDefaultHistory || createMemoryHistory();
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);
  const onParentNavigate = ({ pathname: nextPathname }) => {
    const { pathname } = history.location;
    if (pathname !== nextPathname) history.push(nextPathname);
  };
  return {
    onParentNavigate,
  };
};

if (process.env.NODE_ENV === "development") {
  const useDefaultHistory = createBrowserHistory();
  if (rootElement) mount(rootElement, { useDefaultHistory });
}

// export const Index = App;

export const MyApp = () => <App />;
