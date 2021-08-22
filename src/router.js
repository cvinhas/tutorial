import React from "react";
import Home from "./components/home";
import Categories from "./components/categories";
import CategoryAdd from "./components/categoryAdd";
import TestList from "./components/testList";
import TestListAdd from "./components/testListAdd";
import TestListEdit from "./components/testListEdit";

import '../src/css/styles.css';

const routes = {
    "/home": () => <Home />,
    "/categories": () => <Categories />,
    "/categoryAdd": () => <CategoryAdd />,
    "/testList": () => <TestList />,
    "/testListAdd": () => <TestListAdd />,
    "/testListEdit/:id": ({ id }) => <TestListEdit itemId={id} />,
};

export default routes;
