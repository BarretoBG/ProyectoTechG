import { useCart } from '../context/CartContext';
import { calcularTotal, incrementarCantidad, decrementarCantidad } from '../services/cartService/cartService';
import { CarritoProduct } from '../interfaces/CarritoProduct';

export const useCarItem = (productos: CarritoProduct[]) => {
  const { setCarrito, eliminarDelCarrito } = useCart();

  const handleIncrementar = (productoId: number) => {
    const nuevosProductos = incrementarCantidad(productos, productoId);
    setCarrito(nuevosProductos);
  };

  const handleDecrementar = (productoId: number) => {
    const nuevosProductos = decrementarCantidad(productos, productoId);
    setCarrito(nuevosProductos);
  };

  const handleEliminarProducto = (productoId: number) => {
    eliminarDelCarrito(productoId);
  };

  const total = calcularTotal(productos);

  return {
    handleIncrementar,
    handleDecrementar,
    handleEliminarProducto,
    total,
  };
};