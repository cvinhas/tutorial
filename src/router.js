import React from "react";
import Home from "./components/home";
import Categories from "./components/categories";
import CategoryAdd from "./components/categoryAdd";
import TestList from "./components/testList";

import '../src/css/styles.css';

const routes = {
    "/home": () => <Home />,
    "/categories": () => <Categories />,
    "/categoryAdd": () => <CategoryAdd />,
    "/testList": () => <TestList />,
};

export default routes;
