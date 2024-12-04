// falta test
import { CarritoProduct } from "../../interfaces/CarritoProduct";

export const calcularTotal = (productos: CarritoProduct[]): number => {
  const total = productos.reduce((total, producto) => {
    const precio = Number(producto.price);
    if (!isNaN(precio)) {
      return total + producto.cantidad * precio;
    } else {
      console.error(`El precio del producto ${producto.title} no es válido.`);
      return total;
    }
  }, 0);

  return parseFloat(total.toFixed(2));
};

export const incrementarCantidad = (productos: CarritoProduct[], productoId: number): CarritoProduct[] => {
  return productos.map((producto) =>
    producto.id === productoId
      ? { ...producto, cantidad: producto.cantidad + 1 }
      : producto
  );
};

export const decrementarCantidad = (productos: CarritoProduct[], productoId: number): CarritoProduct[] => {
  return productos.map((producto) =>
    producto.id === productoId && producto.cantidad > 1
      ? { ...producto, cantidad: producto.cantidad - 1 }
      : producto
  );
};

export const agregarAlCarrito = (producto: CarritoProduct, carrito: CarritoProduct[], setCarrito: React.Dispatch<React.SetStateAction<CarritoProduct[]>>) => {
  setCarrito((prevCarrito) => {
    const productoExistente = prevCarrito.find((p) => p.id === producto.id);
    if (productoExistente) {
      return prevCarrito.map((p) =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + (producto.cantidad > p.cantidad ? 1 : -1) }
          : p
      );
    } else {
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    }
  });
};
