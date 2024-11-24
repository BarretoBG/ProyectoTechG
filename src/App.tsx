import { FC, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Producto from "./components/Products/Products";
import { getAllCategories,getAllProducts,buscarProducto } from "./ts/bussines/funcionalidades";

const App: FC = () => {

  useEffect(() => {
    getAllProducts();
    getAllCategories();
    buscarProducto();
  }, []);

  return (
    <>
    <Header />
    <Category />
    <Producto />
    <Footer />
  </>
  );
}

export default App
