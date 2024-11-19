import { Product } from "../interfaces/producto"; 

export interface CarritoProduct extends Product {
  cantidad: number;
}