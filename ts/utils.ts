import { Producto } from "./interfaces";

export const fetchData = async <T>(url: string): Promise<T> => {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }
    return await respuesta.json();
};

export const crearItem = (producto: Producto): HTMLElement => {
    const item = document.createElement('div');
    item.className = 'item';

    const idProducto = document.createElement('input');
    idProducto.type = 'hidden';
    idProducto.id = 'idItem';
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
        agregarAlCarrito(1, [{ id: producto.id.toString(), cantidad: 1 }]);
    });

    item.append(idProducto, img, categoria, titulo, precio, boton);

    return item;
};
