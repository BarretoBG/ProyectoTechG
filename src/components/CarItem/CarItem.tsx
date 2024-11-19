// CarItem.tsx
import { FC } from "react";
import CarItemStyled from './CarItem.styled';
import { CarritoProduct } from '../../interfaces/CarritoProduct'; // Importar el tipo extendido
import { useCart } from '../../context/CartContext'; // Importar el hook del contexto

const { Titulo,Tabla, FilaHeader, Fila, CeldaHeader, Celda, BotonAumentar, BotonDisminuir, Cantidad, BotonEliminar } = CarItemStyled;

interface CarItemProps {
  productos: CarritoProduct[]; // Usamos el tipo CarritoProduct que incluye 'cantidad'
}

const CarItem: FC<CarItemProps> = ({ productos }) => {
  const { agregarAlCarrito, eliminarDelCarrito } = useCart(); // Acceder a las funciones del contexto

  const calcularTotal = () => {
    const total = productos.reduce((total, producto) => {
      const precio = Number(producto.price); // Aseguramos que price sea un número
      if (!isNaN(precio)) {
        return total + producto.cantidad * precio;
      } else {
        console.error(`El precio del producto ${producto.title} no es válido.`);
        return total;
      }
    }, 0);
    return total || 0; // Si total es NaN, devolvemos 0
  };

  const incrementarCantidad = (productoId: number) => {
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
      const productoActualizado: CarritoProduct = { ...producto, cantidad: producto.cantidad + 1 };
      agregarAlCarrito(productoActualizado); // Actualiza la cantidad en el carrito
    }
  };

  const decrementarCantidad = (productoId: number) => {
    const producto = productos.find(p => p.id === productoId);
    if (producto && producto.cantidad > 1) {
      const productoActualizado: CarritoProduct = { ...producto, cantidad: producto.cantidad - 1 };
      agregarAlCarrito(productoActualizado); // Actualiza la cantidad en el carrito
    }
  };

  const eliminarProducto = (productoId: number) => {
    eliminarDelCarrito(productoId); // Elimina el producto del carrito
  };

  return (
    <>
    <Titulo>Resumen de Compra</Titulo>
    <Tabla>
      <thead>
        <FilaHeader>
          <CeldaHeader>Producto</CeldaHeader>
          <CeldaHeader>Nombre</CeldaHeader>
          <CeldaHeader>Cantidad</CeldaHeader>
          <CeldaHeader>Eliminar</CeldaHeader>
        </FilaHeader>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <Fila key={producto.id}>
            <Celda>
              <img src={producto.images[0]} alt={producto.title} width={50} height={50} />
            </Celda>
            <Celda>{producto.title}</Celda>
            <Celda>
              <BotonDisminuir onClick={() => decrementarCantidad(producto.id)}>-</BotonDisminuir>
              <Cantidad>{producto.cantidad}</Cantidad>
              <BotonAumentar onClick={() => incrementarCantidad(producto.id)}>+</BotonAumentar>
            </Celda>
            <Celda>
              <BotonEliminar onClick={() => eliminarProducto(producto.id)}>Eliminar</BotonEliminar>
            </Celda>
          </Fila>
        ))}
      </tbody>
      <tfoot>
        <Fila>
          <Celda colSpan={4} style={{ textAlign: "right", fontWeight: "bold" }}>
            Total a pagar: S/ {calcularTotal()}.00
          </Celda>
        </Fila>
      </tfoot>
    </Tabla>
    </>
  );
};

export default CarItem;


