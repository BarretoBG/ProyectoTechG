import { Producto } from "./interfaces";
import { mapperNombreCategoria, mostrarProductoItem } from "./mappers";
import { filtrarPorCategoria, filtrarPorTitulo, agregarAlCarrito } from "./funcionalidades";

const obtenerProductos = async (): Promise<void> => {
    try {
        const respuesta = await fetch('https://dummyjson.com/products');
        const datos = await respuesta.json();
        const productos: Producto[] = datos.products;

        const contenedorItems = document.getElementById('conjunto-items');
        if (contenedorItems) {
            renderizarProductosEnDOM(productos, contenedorItems, crearItem);
        }
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
};

const crearItem = (producto: Producto): HTMLElement => {
    const item = document.createElement('div');
    item.className = 'item';

    const idProducto = document.createElement('input');
    idProducto.type = 'hidden';
    idProducto.value = producto.id.toString();

    const img = document.createElement('img');
    img.className = 'img-producto';
    img.src = producto.imagenes[0];

    const categoria = document.createElement('h3');
    categoria.textContent = producto.categoria;

    const titulo = document.createElement('p');
    titulo.id = 'titulo';
    titulo.textContent = producto.titulo;

    const precio = document.createElement('h2');
    precio.id = 'precio';
    precio.textContent = `S/.${producto.precio}`;

    const boton = document.createElement('button');
    boton.textContent = 'Agregar al carrito';

    boton.addEventListener('click', () => {
        agregarAlCarrito(1, [{ id: idProducto.value, cantidad: 1 }]);
    });

    item.append(idProducto, img, categoria, titulo, precio, boton);

    return item;
};

window.onload = obtenerProductos;
