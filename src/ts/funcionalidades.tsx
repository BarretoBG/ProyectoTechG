import { Producto, ProductoCarrito } from "./interfaces";

//Crear un item
export const crearItem = (producto: Producto): HTMLElement => {
    const item = document.createElement('div');
    item.className = 'item';

    const idProducto = document.createElement('input');
    idProducto.type = 'hidden';
    idProducto.id = 'idItem';
    idProducto.value = producto.id.toString();

    const img = document.createElement('img');
    img.className = 'img-producto';
    img.src = producto.images[0];

    const categoria = document.createElement('h3');
    categoria.textContent = producto.category;

    const titulo = document.createElement('p');
    titulo.id = 'titulo';
    titulo.textContent = producto.title;

    const precio = document.createElement('h2');
    precio.id = 'precio';
    precio.textContent = `S/.${producto.price}`;

    const boton = document.createElement('button');
    boton.textContent = 'Agregar al carrito';

    boton.addEventListener('click', () => {
        agregarAlCarrito(1, [{ id: producto.id.toString(), quantity: 1 }]);
    });

    item.append(idProducto, img, categoria, titulo, precio, boton);

    return item;
};

// Filtrar productos
export const filtrarPorCategoria = (productos: Producto[], categoria: string): Producto[] =>
    productos.filter(producto => producto.category === categoria);

export const filtrarPorTitulo = (productos: Producto[], titulo: string): Producto[] =>
    productos.filter(producto => 
        producto.title.toLowerCase().includes(titulo.toLowerCase())
    );

//Mostrar productos por categoria
export const getProductbyCategory = async (categoria: string): Promise<void> => {
    try {
        const respuesta = await fetch('https://dummyjson.com/products');
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        const productosFiltrados: Producto[] = filtrarPorCategoria(datos.products, categoria);

        const conjuntoItems = document.getElementById('conjunto-items');
        if (!conjuntoItems) {
            console.error('El elemento "conjunto-items" no existe.');
            return;
        }

        conjuntoItems.innerHTML = '';

        productosFiltrados.forEach((producto: Producto) => {
            const item = crearItem(producto);
            conjuntoItems.appendChild(item);
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
};

// Contador para carrito
let totalProductosEnCarrito = 0;

export const agregarAlCarrito = async (idUsuario: number, productos: ProductoCarrito[]): Promise<void> => {
    try {
        const respuesta = await fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: idUsuario, products: productos })
        });

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        totalProductosEnCarrito += productos.length;
        actualizarVisualCarrito(totalProductosEnCarrito);
    } catch (error) {
        console.error('Error al agregar productos al carrito:', error);
    }
};

export const actualizarVisualCarrito = (total: number): void => {
    const contenedorCarrito = document.getElementById('carrito');
    let contador = document.getElementById('contador-carrito') as HTMLElement;

    if (!contador) {
        contador = document.createElement('span');
        contador.id = 'contador-carrito';
        contador.className = 'contador';
        contenedorCarrito?.appendChild(contador);
    }

    contador.textContent = total.toString();
};