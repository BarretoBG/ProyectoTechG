export const reemplazoNombreCategoria = (nombre) => nombre.replace(/-/g, ' ');
export const mapperProductos = (productos, elementoPadre, crearItem) => {
    elementoPadre.innerHTML = '';
    productos.forEach(producto => {
        const item = crearItem(producto);
        elementoPadre.appendChild(item);
    });
};
