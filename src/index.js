import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";
import routes from "./router";
import NoPageFound from "./components/page_not_found";
import '../node_modules/react-bootstrap/dist/react-bootstrap';

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div><ul>
      <li><A href="/home">Home</A></li>
      <li><A href="/categories">Categories List</A></li>
      <li><A href="/categoryAdd">New Category</A></li>
      <li><A href="/testList">Test List</A></li>
    </ul>
      {routeResult || <NoPageFound />}
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);;
