import { Producto } from "../models/Producto";
import { ProductoCarrito } from "../models/Carrito";
import { filtrarPorCategoria,filtrarPorTitulo } from "../utils/filter";
import { fetchData } from "../services/fetchData";
import { fetchDataCategoria } from "../services/fetchData";
import { renderItems } from "../vista/render";
import { fetchDataCarrito } from "../services/fetchData";
import { actualizarVisualCarrito } from "../vista/render";
import { renderCategorias } from '../vista/render';

export const getProductbyCategory = async (categoria: string): Promise<void> => {
    try {
        const datos = await fetchData<{ products: Producto[] }>();
        const productosFiltrados: Producto[] = filtrarPorCategoria(datos.products, categoria);
        renderItems(productosFiltrados, 'conjunto-items');
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
};


let totalProductosEnCarrito = 0;

export const agregarAlCarrito = async (idUsuario: number, productos: ProductoCarrito[]): Promise<void> => {
    try {
        const body = {
            userId: idUsuario,
            products: productos,
        };

        await fetchDataCarrito<{ id: number }>(body);
        totalProductosEnCarrito += productos.length;
        actualizarVisualCarrito(totalProductosEnCarrito);

    } catch (error) {
        console.error('Error al agregar productos al carrito:', error);
    }
};

export const getAllCategories = async (): Promise<void> => {
    try {
        const categorias = await fetchDataCategoria<string[]>();
        renderCategorias(categorias); 
    } catch (error) {
        console.error('Error al cargar las categorías:', error);
    }
};