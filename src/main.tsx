import { getAllCategories } from "./ts/bussines/funcionalidades";
import { getAllProducts } from "./ts/bussines/funcionalidades";
import { buscarProducto } from "./ts/bussines/funcionalidades";


window.onload = () => {
    getAllProducts();
    getAllCategories();
    buscarProducto();
};
