export interface ProductoCarrito {
    id: number;
    quantity: number;
}

export interface Carrito {
    idUser: number;
    products: ProductoCarrito[];
}

export interface Grupos {
    [key: string]: string[];
}