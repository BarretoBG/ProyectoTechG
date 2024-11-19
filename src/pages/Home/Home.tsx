import { FC, useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/Category/Category";
import { Grupos, Product } from '../../interfaces/producto';
import Products from '../../components/Products/Products';
import { fetchData } from '../../proxy/fetchData';
import { useCart } from '../../context/CartContext';
import "./Home.css";

// Definimos los grupos de categorías
const grupos: Grupos = {
  "Beauty": ["beauty", "skin-care", "fragrances"],
  "Men": ["mens-shirts", "mens-shoes", "mens-watches"],
  "Women": ["womens-dresses", "womens-bags", "womens-shoes", "womens-watches", "womens-jewellery"],
  "Electronics": ["smartphones", "laptops", "tablets", "mobile-accessories"],
  "Home": ["furniture", "home-decoration", "kitchen-accessories"],
  "Sports": ["sports-accessories"],
  "Vehicles": ["motorcycle", "vehicle"]
};

// Tipo de respuesta de la API, que incluye la propiedad 'products'
interface ApiResponse {
  products: Product[];
}

const Home: FC = () => {
  const [productos, setProductos] = useState<Product[]>([]); // Todos los productos
  const [productosFiltrados, setProductosFiltrados] = useState<Product[]>([]); // Productos filtrados
  const [cargando, setCargando] = useState<boolean>(true);
  const [busqueda, setBusqueda] = useState<string>(''); // Estado para la barra de búsqueda
  
  const { carrito, agregarAlCarrito } = useCart(); // Obtener carrito y agregarAlCarrito desde el contexto

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const response = await fetchData<ApiResponse>(); // Usamos ApiResponse como tipo de respuesta
        setProductos(response.products); // Establecemos el estado con los productos
        setProductosFiltrados(response.products); // Inicialmente mostramos todos los productos
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  useEffect(() => {
    // Filtrar productos si hay algo en la barra de búsqueda
    if (busqueda.trim() === '') {
      setProductosFiltrados(productos); // Si la búsqueda está vacía, mostramos todos los productos
    } else {
      const productosFiltrados = productos.filter(producto =>
        producto.title.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.description.toLowerCase().includes(busqueda.toLowerCase())
      );
      setProductosFiltrados(productosFiltrados); // Filtrar productos según el texto de búsqueda
    }
  }, [busqueda, productos]); // Cada vez que 'busqueda' o 'productos' cambien, se actualiza la lista filtrada

  const handleCategoryClick = (categoria: string) => {
    if (categoria === '') {
      setProductosFiltrados(productos); // Mostrar todos los productos si la categoría está vacía
    } else {
      const productosFiltrados = productos.filter(producto => producto.category === categoria);
      setProductosFiltrados(productosFiltrados); // Filtrar productos según la categoría seleccionada
    }
  };

  // Función para manejar el clic en el botón "Agregar al carrito"
  const handleAddToCart = (producto: Product) => {
    // Crear un producto con la propiedad 'cantidad' que es requerida para el carrito
    const productoConCantidad = { ...producto, cantidad: 1 }; // Por defecto, añadimos 1 a la cantidad
    agregarAlCarrito(productoConCantidad); // Añadir al carrito
  };

  return (
    <>
    <div className="layout">
      <Header setBusqueda={setBusqueda} /> {/* Pasamos la función setBusqueda al Header */}
      <Category categorias={grupos} onCategoryClick={handleCategoryClick} />
      {cargando ? <p>Cargando productos...</p> : (
        <Products productos={productosFiltrados} onAddToCart={handleAddToCart} />
      )}
      <Footer />
      </div>
    </>
  );
};

export default Home;