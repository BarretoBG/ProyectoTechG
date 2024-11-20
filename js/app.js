let totalProductosEnCarrito = 0;

//Crear item--
function createitem (id,imagen,category,title,price){
    const item = document.createElement('div');
    item.className = 'item';

    const idProducto = document.createElement('input');
    idProducto.type = 'hidden';
    idProducto.id = 'idItem';
    idProducto.value = id;

    const img = document.createElement('img');
    img.className = 'img-producto';
    img.src = imagen;

    const categoria = document.createElement('h3');
    categoria.textContent = category;

    const titulo = document.createElement('p');
    titulo.id = 'titulo';
    titulo.textContent = title;

    const precio = document.createElement('h2');
    precio.id = 'precio';
    precio.textContent = `S/.${price}`;

    const boton = document.createElement('button');
    boton.textContent = 'Agregar al carrito';

    boton.addEventListener('click', () => {
        const userId = 1;
        const quantity = 1;
        const productos = [
            { id: idProducto.value, quantity: quantity }
        ];
        agregarAlCarrito(userId, productos);
    });

    item.appendChild(idProducto);
    item.appendChild(img);
    item.appendChild(categoria);
    item.appendChild(titulo);
    item.appendChild(precio);
    item.appendChild(boton);

    return item;
}

//Mostrar todos los productos--
const getAllProducts = async() => {
	try {
		const respuesta = await fetch('https://dummyjson.com/products');
		console.log(respuesta)
        const conjuntoItems = document.getElementById('conjunto-items');
        
        if (!conjuntoItems) {
            console.error('El elemento "conjunto-items" no existe');
            return;
        }
        
        conjuntoItems.innerHTML = '';

        const datos = await respuesta.json();
        datos.products.forEach(producto => {
            const item = createitem(producto.id,producto.images[0],producto.category,producto.title,producto.price);
            conjuntoItems.appendChild(item);    
        });
	} catch(error){
		console.log(error);
	}
}

getAllProducts();

// Filtrar productos por categoría--
function filtrarPorCategoria(productos, categoria) {
    return productos.filter(producto => producto.category === categoria);
}

// Mostrar productos por categoría
async function getProductbyCategory(categoria) {
    try {
        const respuesta = await fetch('https://dummyjson.com/products');
        console.log(respuesta);

        const datos = await respuesta.json();
        const productosFiltrados = filtrarPorCategoria(datos.products, categoria);

        const conjuntoItems = document.getElementById('conjunto-items');
        if (!conjuntoItems) {
            console.error('El elemento "conjunto-items" no existe.');
            return;
        }
        conjuntoItems.innerHTML = '';

        productosFiltrados.forEach(producto => {
            const item = createitem(producto.id,producto.images[0],producto.category,producto.title,producto.price);
            conjuntoItems.appendChild(item);
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

// Filtrar productos por nombre--
function filtrarPorTitulo(productos, titulo) {
    return productos.filter(producto =>
        producto.title.toLowerCase().includes(titulo.toLowerCase())
    );
}

//Buscar en navegador
async function buscarProducto() {
    try {
        const inputBusqueda = document.getElementById('input-busqueda');
        const conjuntoItems = document.getElementById('conjunto-items');

        if (!conjuntoItems) {
            console.error('El elemento "conjunto-items" no existe.');
            return;
        }

        inputBusqueda.addEventListener('input', async () => {
            const texto = inputBusqueda.value;
            const respuesta = await fetch(`https://dummyjson.com/products/search?q=${texto}`);
            console.log(respuesta);
            const datos = await respuesta.json();
            let productosFiltrados = datos.products;
            conjuntoItems.innerHTML = '';
            productosFiltrados.forEach(producto => {
                const item = createitem(producto.id,producto.images[0],producto.category,producto.title,producto.price);
                conjuntoItems.appendChild(item);
        });
        })
        // Mostrar todos los productos sin filtros
        getAllProducts;
	} catch(error){
		console.log(error);
	}
}

// Iniciar la funcionalidad al cargar la página--
window.onload = buscarProducto;

const grupos = {
    Beauty: ["beauty", "skin-care", "fragrances"],
    Men: ["mens-shirts", "mens-shoes", "mens-watches"],
    Women: ["womens-dresses", "womens-bags", "womens-shoes", "womens-watches", "womens-jewellery"],
    Electronics: ["smartphones", "laptops", "tablets", "mobile-accessories"],
    Home: ["furniture", "home-decoration", "kitchen-accessories"],
    Sports: ["sports-accessories"],
    Vehicles: ["motorcycle", "vehicle"]
};

//Listar categoria--
const getAllCategories = async() => {
    try {
        const respuesta = await fetch('https://dummyjson.com/products/category-list');
        const categorias = await respuesta.json();
        const nombrecategorias = document.getElementById('nombre-categorias');
                
        nombrecategorias.innerHTML = '';
        Object.keys(grupos).forEach(grupo => {
            // Crear elemento del grupo
            const grupoCategoria = document.createElement('div');
            grupoCategoria.classList.add('grupo-contenedor');

            const nombreGrupoCategoria = document.createElement('h3');
            nombreGrupoCategoria.textContent = grupo;
            grupoCategoria.appendChild(nombreGrupoCategoria);

            // Crear contenedor para subcategorías
            const subcategoriaGrupo = document.createElement('ul');
            subcategoriaGrupo.classList.add('subcategoria');
            
            // Añadir subcategorías al contenedor
            grupos[grupo].forEach(subcategoria => {
                if (categorias.includes(subcategoria)) {
                    const subcategoriaItem = document.createElement('li');
                    const subcategoriaLink = document.createElement('a');
                    subcategoriaLink.textContent = subcategoria.replace(/-/g, ' '); //reemplaza los guiones por espacios
                    subcategoriaLink.href = '#';
                    
                    // Event listener para filtrar productos al hacer clic
                    subcategoriaLink.addEventListener('click', (e) => {
                        getProductbyCategory(subcategoria);
                    });

                    subcategoriaItem.appendChild(subcategoriaLink);
                    subcategoriaGrupo.appendChild(subcategoriaItem);
                }
            });

            grupoCategoria.appendChild(subcategoriaGrupo);
            nombrecategorias.appendChild(grupoCategoria);
        });
    } catch(error){
        console.log(error);
    }
}
    
getAllCategories();   

// Función para agregar productos al carrito--
async function agregarAlCarrito(userId, productos) {
    try {
        const respuesta = await fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: userId,
                products: productos
            })
        });

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        console.log('Productos agregados al carrito:', datos);

        // Incrementar el contador global
        totalProductosEnCarrito += 1;

        // Actualizar el contador visual
        actualizarVisualCarrito();
    } catch (error) {
        console.error('Error al agregar productos al carrito:', error);
    }
}

// Función para actualizar--
function actualizarVisualCarrito() {
    const carritoContenedor = document.getElementById('carrito');
    let contador = document.getElementById('contador-carrito');

    if (!contador) {
        contador = document.createElement('span');
        contador.id = 'contador-carrito';
        contador.className = 'contador';
        carritoContenedor.appendChild(contador);
    }

    // Actualizar el contenido del contador
    contador.textContent = totalProductosEnCarrito;
}


