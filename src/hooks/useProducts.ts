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

  const productosFiltrados = useMemo(() => {
    let productosFiltrados = [...productos];

    if (busqueda.trim() !== '') {
      productosFiltrados = productosFiltrados.filter(({ title, description }) =>
        [title.toLowerCase(), description.toLowerCase()].some((campo) =>
          campo.includes(busqueda.toLowerCase())
        )
      );
    }

    const categoriaSeleccionada = categoria.toLowerCase();
    if (categoriaSeleccionada !== '') {
      let categoriaEncontrada = false;
      Object.values(grupos).forEach(subcategorias => {
        if (subcategorias.map(subcat => subcat.toLowerCase()).includes(categoriaSeleccionada)) {
          categoriaEncontrada = true;
          productosFiltrados = productosFiltrados.filter(producto =>
            producto.category.toLowerCase() === categoriaSeleccionada
          );
        }
      });

      if (!categoriaEncontrada) {
        console.error(`Categoría no encontrada: ${categoriaSeleccionada}`);
      }
    }

    return productosFiltrados;
  }, [busqueda, categoria, productos]);

  return { productosFiltrados, cargando };
};
