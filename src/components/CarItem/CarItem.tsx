import { FC } from "react";
import CarItemStyled from './CarItem.styled';
import { CarritoProduct } from '../../interfaces/CarritoProduct';
import { useCarItem } from '../../hooks/useCart';

const { Titulo, Tabla, FilaHeader, Fila, CeldaHeader, Celda, BotonAumentar, BotonDisminuir, Cantidad, BotonEliminar } = CarItemStyled;

interface CarItemProps {
  productos: CarritoProduct[];
}

const CarItem: FC<CarItemProps> = ({ productos }) => {
  const { handleIncrementar, handleDecrementar, handleEliminarProducto, total } = useCarItem(productos);

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
                <BotonDisminuir onClick={() => handleDecrementar(producto.id)}>-</BotonDisminuir>
                <Cantidad>{producto.cantidad}</Cantidad>
                <BotonAumentar onClick={() => handleIncrementar(producto.id)}>+</BotonAumentar>
              </Celda>
              <Celda>
                <BotonEliminar onClick={() => handleEliminarProducto(producto.id)}>Eliminar</BotonEliminar>
              </Celda>
            </Fila>
          ))}
        </tbody>
        <tfoot>
          <Fila>
            <Celda colSpan={4} style={{ textAlign: "right", fontWeight: "bold" }}>
              Total a pagar: S/ {total}
            </Celda>
          </Fila>
        </tfoot>
      </Tabla>
    </>
  );
};

export default CarItem;
