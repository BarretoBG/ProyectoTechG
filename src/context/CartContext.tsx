// falta test
import { createContext, useState, useContext, FC, ReactNode } from "react";
import { Product } from "../interfaces/producto";

interface CarritoProduct extends Product {
  cantidad: number;
}

interface CartContextType {
  carrito: CarritoProduct[];
  setCarrito: React.Dispatch<React.SetStateAction<CarritoProduct[]>>;
  limpiarCarrito: () => void;
  eliminarDelCarrito: (productoId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [carrito, setCarrito] = useState<CarritoProduct[]>([]);
  
  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const eliminarDelCarrito = (productoId: number) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== productoId));
  };

  return (
    <CartContext.Provider value={{ carrito, setCarrito, eliminarDelCarrito, limpiarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

export {CartContext};
