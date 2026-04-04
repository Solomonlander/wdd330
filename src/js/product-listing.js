import ProductData from "./ProductData.js";
import ProductList from "./ProductList.js";
import {
    loadHeaderFooter,
    getParam
} from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");

const title = document.querySelector(".title");
title.textContent = "Top Products: " + category;

const dataSource = new ProductData();

const listElement = document.querySelector(".product-list");

const myList = new ProductList(
    category,
    dataSource,
    listElement
);

myList.init();

// ✅ SEARCH FEATURE
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product-list li");

    products.forEach(product => {
        const text = product.textContent.toLowerCase();
        product.style.display = text.includes(value) ? "" : "none";
    });
});