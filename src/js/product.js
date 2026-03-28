import ProductData from "./ProductData.js";
import ProductDetails from "./productDetail.js";
import {
    getParam
} from "./utils.mjs";


const id =
    getParam("id");


const dataSource =
    new ProductData();


const element =
    document.querySelector(
        ".product-detail"
    );


const product =
    new ProductDetails(
        id,
        dataSource,
        element
    );


product.init();