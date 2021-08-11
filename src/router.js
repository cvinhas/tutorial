import React from "react";
import Categories from "./components/categories";
import CategoryForm from "./components/category_form";
import Home from "./components/home";
import '../src/css/styles.css';

const routes = {
    "/home": () => <Home />,
    "/categories": () => <Categories />,
    "/categoryForm": () => <CategoryForm />,
};

export default routes;
