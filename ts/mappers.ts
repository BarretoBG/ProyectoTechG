import { Producto } from "./interfaces";

// esto no es un mapper es un utilitario y debería tener un nombre más general
// el regex usado debe estar definido en un enum para que cualquiera sepa que está evaluando
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
