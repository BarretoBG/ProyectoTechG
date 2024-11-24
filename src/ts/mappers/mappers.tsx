import { Producto } from "../models/Producto";

export const mapperProductos = (
    productos: Producto[],
    crearItem: (producto: Producto) => HTMLElement
): HTMLElement[] => {
    return productos.map(producto => crearItem(producto));
};


