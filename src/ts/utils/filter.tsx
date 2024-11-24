import { Producto } from "../models/Producto";

export const filtrarPorCategoria = (productos: Producto[], categoria: string): Producto[] =>
    productos.filter(producto => producto.category === categoria);

export const filtrarPorTitulo = (productos: Producto[], titulo: string): Producto[] =>
    productos.filter(producto => 
        producto.title.toLowerCase().includes(titulo.toLowerCase())
);