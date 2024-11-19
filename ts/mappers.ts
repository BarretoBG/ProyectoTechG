import { Producto } from "./interfaces";

export const reemplazoNombreCategoria = (nombre: string): string => 
    nombre.replace(/-/g, ' ');

export const mapperProductos = (
    productos: Producto[],
    contenedor: HTMLElement,
    crearItem: (producto: Producto) => HTMLElement
): void => {
    contenedor.innerHTML = '';
    productos.forEach(producto => {
        const item = crearItem(producto);
        contenedor.appendChild(item);
    });
};
