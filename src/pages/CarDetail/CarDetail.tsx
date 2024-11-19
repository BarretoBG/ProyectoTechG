import { FC, useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CarItem from "../../components/CarItem/CarItem";
import Resumen from "../../components/Resumen/Resumen";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const CarDetail: FC = () => {
  const { carrito, setCarrito } = useCart();
  const [busqueda, setBusqueda] = useState<string>('');
  const navigate = useNavigate();

  const manejarCompra = (datosFormulario: Record<string, string>) => {
    console.log("Datos enviados:", datosFormulario);
    alert("Su pedido se registró con éxito");

    setCarrito([]); // Limpiamos el carrito
    navigate("/"); // Redirigimos al inicio
  };

  return (
    <>
      <Header setBusqueda={setBusqueda} />
      <CarItem productos={carrito} /> 
      <Resumen carrito={carrito} onSubmit={manejarCompra} /> 
      <Footer />
    </>
  );
};