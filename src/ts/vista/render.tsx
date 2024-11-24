import { Producto } from "../models/Producto";
import { ProductoCarrito } from "../models/Carrito";
import { Grupos } from "../models/Carrito";
import { getProductbyCategory } from "../bussines/funcionalidades";
import { agregarAlCarrito } from "../bussines/funcionalidades";

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
        const idUsuario = 1;

        const productoCarrito: ProductoCarrito = {
            id: producto.id,
            quantity: 1,
        };
            agregarAlCarrito(idUsuario, [productoCarrito]);
    });

    item.append(idProducto, img, categoria, titulo, precio, boton);
    return item;
};

export const renderItems = (productos: Producto[], contenedorId: string): void => {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
        console.error(`El contenedor con ID "${contenedorId}" no existe.`);
        return;
    }

    contenedor.innerHTML = '';
    productos.forEach((producto) => {
        const item = crearItem(producto);
        contenedor.appendChild(item);
    });
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

export const renderCategorias = (categorias: string[]): void => {
    const nombreCategorias = document.getElementById('nombre-categorias');
                
    if (!nombreCategorias) {
        console.error('El elemento "nombre-categorias" no existe');
        return;
    }

    nombreCategorias.innerHTML = '';
    
    const grupos: Grupos = {
        "Beauty": ["beauty", "skin-care", "fragrances"],
        "Men": ["mens-shirts", "mens-shoes", "mens-watches"],
        "Women": ["womens-dresses", "womens-bags", "womens-shoes", "womens-watches", "womens-jewellery"],
        "Electronics": ["smartphones", "laptops", "tablets", "mobile-accessories"],
        "Home": ["furniture", "home-decoration", "kitchen-accessories"],
        "Sports": ["sports-accessories"],
        "Vehicles": ["motorcycle", "vehicle"]
    };

    Object.keys(grupos).forEach(grupo => {
        const grupoCategoria = document.createElement('div');
        grupoCategoria.classList.add('grupo-contenedor');
        
        const nombreGrupoCategoria = document.createElement('h3');
        nombreGrupoCategoria.textContent = grupo;
        grupoCategoria.appendChild(nombreGrupoCategoria);

        const subcategoriaGrupo = document.createElement('ul');
        subcategoriaGrupo.classList.add('subcategoria');
        
        // Añadir subcategorías al contenedor
        grupos[grupo].forEach(subcategoria => {
            if (categorias.includes(subcategoria)) {
                const subcategoriaItem = document.createElement('li');
                const subcategoriaLink = document.createElement('a');
                subcategoriaLink.textContent = subcategoria.replace(/-/g, ' '); // Reemplazar guiones por espacios
                subcategoriaLink.href = '#';
                
                // Event listener para filtrar productos al hacer clic
                subcategoriaLink.addEventListener('click', (e) => {
                    getProductbyCategory(subcategoria); // Suponiendo que esta función ya está definida
                });

                subcategoriaItem.appendChild(subcategoriaLink);
                subcategoriaGrupo.appendChild(subcategoriaItem);
            }
        });

        grupoCategoria.appendChild(subcategoriaGrupo);
        nombreCategorias.appendChild(grupoCategoria);
    });
};