import { Producto } from "../models/Producto";
import { ProductoCarrito } from "../models/Carrito";
import { filtrarPorCategoria,filtrarPorTitulo } from "../utils/filter";
import { fetchData } from "../services/fetchData";
import { fetchDataCategoria } from "../services/fetchData";
import { renderItems } from "../vista/render";
import { fetchDataCarrito } from "../services/fetchData";
import { actualizarVisualCarrito } from "../vista/render";
import { renderCategorias } from '../vista/render';
import { mapperProductos } from "..//mappers/mappers";
import { crearItem } from "../vista/render";

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

export const getAllProducts = async (): Promise<void> => {
    try {
      const datos = await fetchData<{ products: Producto[] }>();
      const contenedor = document.getElementById('conjunto-items');

      if (contenedor) {
        const items = mapperProductos(datos.products, crearItem);
        contenedor.innerHTML = '';
        items.forEach(item => contenedor.appendChild(item));
      }
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
};

export const buscarProducto = async (): Promise<void> => {
    try {
        const inputBusqueda = document.getElementById('input-busqueda') as HTMLInputElement;
        const conjuntoItems = document.getElementById('conjunto-items');

        if (!conjuntoItems || !inputBusqueda) {
            console.error('Los elementos necesarios no existen en el DOM.');
            return;
        }

        inputBusqueda.addEventListener('input', async () => {
            const texto = inputBusqueda.value.toLowerCase();
            const datos = await fetchData<{ products: Producto[] }>();
            const productosFiltrados = datos.products.filter(producto => 
                producto.title.toLowerCase().includes(texto)
            );
            
            const items = mapperProductos(productosFiltrados, crearItem);
            conjuntoItems.innerHTML = '';
            items.forEach(item => conjuntoItems.appendChild(item));
        });

        await getAllProducts();
    } catch (error) {
        console.error('Error al realizar la búsqueda de productos:', error);
    }
};