// CartContext.tsx
import { createContext, useState, useContext, FC, ReactNode } from "react";
import { Product } from "../interfaces/producto";

interface CarritoProduct extends Product {
  cantidad: number;
}

interface CartContextType {
  carrito: CarritoProduct[];
  setCarrito: React.Dispatch<React.SetStateAction<CarritoProduct[]>>; // Exponer setCarrito 
  agregarAlCarrito: (producto: CarritoProduct) => void; // Cambiar a CarritoProduct
  eliminarDelCarrito: (productoId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [carrito, setCarrito] = useState<CarritoProduct[]>([]);

  const agregarAlCarrito = (producto: CarritoProduct) => {
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
  

  const eliminarDelCarrito = (productoId: number) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== productoId));
  };

  // lo ideal ser'ia solo exportar el value y la funci'on de cambio, la dem'as l'ogica debe llamarse a demanda desde donde sea necesairo pero no deber'ia ser incluida cuando se use el provider.
  return (
    <CartContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, eliminarDelCarrito }}>
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
