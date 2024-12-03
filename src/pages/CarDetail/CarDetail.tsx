import { FC, useState } from 'react';
import Header from "../../components/HeaderPrincipal/HeaderSecundario";
import Footer from "../../components/Footer/Footer";
import CarItem from "../../components/CarItem/CarItem";
import Resumen from "../../components/Resumen/Resumen";
import { useCart } from "../../context/CartContext";

export const CarDetail: FC = () => {
  const { carrito, setCarrito } = useCart();

  const manejarCompra = (datosFormulario: Record<string, string>) => {
    console.log("Datos enviados:", Object.values(datosFormulario));
    alert("Su pedido se registró con éxito");
    setCarrito([]);
  };

  return (
    <>
      <Header />
      <CarItem productos={carrito} /> 
      <Resumen carrito={carrito} onSubmit={manejarCompra} /> 
      <Footer />
    </>
  );
};