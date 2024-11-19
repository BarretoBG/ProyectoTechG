export interface Producto {
    id: number;
    imagenes: string[];
    categoria: string;
    titulo: string;
    precio: number;
}

export interface ProductoCarrito {
    id: string;
    cantidad: number;
}

export interface Carrito {
    usuarioId: number;
    productos: ProductoCarrito[];
}
