import { CarritoProduct } from "../interfaces/CarritoProduct"; 

export interface formUser {
    nombres: string;
    apellidos: string;
    distrito: string;
    direccion: string;
    referencia: string;
    celular: string;
    [key: string]: string;
  }
  
export interface ResumenProps {
    carrito: CarritoProduct[];
    onSubmit: (datosFormulario: formUser) => void;
  }
  