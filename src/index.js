import React from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import routes from "./router";
import { A } from "hookrouter";
import NoPageFound from "./components/page_not_found";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div><ul>
      <li><A href="/home">Home</A></li>
      <li><A href="/categories">Categories List</A></li>
      <li><A href="/categoryForm">New Category</A></li>
    </ul>
      {routeResult || <NoPageFound />}
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);;
