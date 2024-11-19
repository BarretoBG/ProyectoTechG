import { Producto } from "./interfaces";

export const reemplazoNombreCategoria = (nombre: string): string => 
    nombre.replace(/-/g, ' ');

export const mapperProductos = (
    productos: Producto[],
    elementoPadre: HTMLElement,
    crearItem: (producto: Producto) => HTMLElement
): void => {
    elementoPadre.innerHTML = '';
    productos.forEach(producto => {
        const item = crearItem(producto);
        elementoPadre.appendChild(item);
    });
};
