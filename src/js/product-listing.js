import ProductData from "./ProductData.js";
import ProductList from "./ProductList.js";
import {
    loadHeaderFooter,
    getParam
} from "./utils.mjs";


loadHeaderFooter();


const category =
    getParam("category");


const title =
    document.querySelector(".title");
    
title.textContent =
    "Top Products: " + category;


const dataSource =
    new ProductData();


const listElement =
    document.querySelector(
        ".product-list"
    );


const myList =
    new ProductList(
        category,
        dataSource,
        listElement
    );


myList.init();