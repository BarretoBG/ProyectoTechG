import { useState, useEffect, useMemo } from 'react';
import { fetchData } from '../proxy/fetchData';
import { Product } from '../interfaces/producto';
import { grupos } from '../interfaces/categories';

interface ApiResponse {
  products: Product[];
}

export const useProductos = (busqueda: string, categoria: string) => {
  const [productos, setProductos] = useState<Product[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const response = await fetchData<ApiResponse>();
        if (Array.isArray(response.products)) {
          setProductos(response.products);
        } else {
          console.error('La respuesta no contiene un arreglo de productos');
        }
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        setCargando(false);
      }
    };
    cargarProductos();
  }, []);

  // Usamos useMemo para memorizar productos filtrados y evitar recalcular si no cambian los datos
  const productosFiltrados = useMemo(() => {
    let productosFiltrados = [...productos];

    // Filtrado por búsqueda
    if (busqueda.trim() !== '') {
      productosFiltrados = productosFiltrados.filter(({ title, description }) =>
        [title.toLowerCase(), description.toLowerCase()].some((campo) =>
          campo.includes(busqueda.toLowerCase())
        )
      );
    }

    // Filtrado por categoría
    const categoriaSeleccionada = categoria.toLowerCase();
    if (categoriaSeleccionada !== '') {
      // Recorremos los grupos y buscamos si la categoriaSeleccionada está en alguna de las subcategorías
      let categoriaEncontrada = false;
      Object.values(grupos).forEach(subcategorias => {
        if (subcategorias.map(subcat => subcat.toLowerCase()).includes(categoriaSeleccionada)) {
          categoriaEncontrada = true;
          productosFiltrados = productosFiltrados.filter(producto =>
            producto.category.toLowerCase() === categoriaSeleccionada
          );
        }
      });

      // Si no se encontró la categoría en los grupos, se imprime un error
      if (!categoriaEncontrada) {
        console.error(`Categoría no encontrada: ${categoriaSeleccionada}`);
      }
    }

    return productosFiltrados;
  }, [busqueda, categoria, productos]);

  return { productosFiltrados, cargando };
};
