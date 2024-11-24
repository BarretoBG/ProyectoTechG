import { fetchData } from "./ts/services/fetchData";
import { mapperProductos } from "./ts/mappers/mappers";
import { crearItem } from "./ts/vista/render";
import { Producto } from "./ts/models/Producto";
import { getAllCategories } from "./ts/bussines/funcionalidades";

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

//Mostrar productos buscados
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

window.onload = () => {
    getAllProducts();
    getAllCategories();
    buscarProducto();
};
