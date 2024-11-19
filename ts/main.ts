import { fetchData } from "./utils";
import { mapperProductos } from "./mappers";
import { crearItem } from "./utils";
import { Producto } from "./interfaces";
import { getProductbyCategory } from "./funcionalidades";

// Definir el tipo de grupos y categorías
interface Grupos {
    [grupo: string]: string[];
}

// Mostrar todas las categorías
const getAllCategories = async (): Promise<void> => {
    try {
        const respuesta = await fetch('https://dummyjson.com/products/category-list');
        const categorias: string[] = await respuesta.json();
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
            nombreCategorias.appendChild(grupoCategoria);
        });
    } catch (error) {
        console.log(error);
    }
};

const getAllProducts = async (): Promise<void> => {
    try {
        const datos = await fetchData<{ products: Producto[] }>('https://dummyjson.com/products');
        const conjuntoItems = document.getElementById('conjunto-items');
        if (conjuntoItems) {
            mapperProductos(datos.products, conjuntoItems, crearItem);
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

        if (!conjuntoItems) {
            console.error('El elemento "conjunto-items" no existe.');
            return;
        }

        inputBusqueda.addEventListener('input', async () => {
            const texto = inputBusqueda.value;
            const respuesta = await fetch(`https://dummyjson.com/products/search?q=${texto}`);
            if (!respuesta.ok) {
                console.error(`Error en la solicitud: ${respuesta.status}`);
                return;
            }

            const datos = await respuesta.json();
            const productosFiltrados: Producto[] = datos.products;

            conjuntoItems.innerHTML = '';
            productosFiltrados.forEach((producto: Producto) => {
                const item = crearItem(producto);
                conjuntoItems.appendChild(item);
            });
        });

        // Mostrar todos los productos sin filtros al cargar la página
        getAllProducts();
    } catch (error) {
        console.error('Error al realizar la búsqueda de productos:', error);
    }
};

window.onload = () => {
    getAllProducts();
    getAllCategories();
    buscarProducto();
};
