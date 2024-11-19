export interface Producto {
    id: number;
    images: string;
    category: string;
    title: string;
    price: number;
}

export interface ProductoCarrito {
    id: string;
    quantity: number;
}

export interface Carrito {
    idUser: number;
    products: ProductoCarrito[];
}

