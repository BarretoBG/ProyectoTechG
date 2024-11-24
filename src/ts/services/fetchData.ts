export const fetchData = async <T>(): Promise<T> => {
    const url = 'https://dummyjson.com/products'; // URL fija
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }
    
    return await respuesta.json();
};

export const fetchDataCarrito = async <T>(body: object): Promise<T> => {
    const url = 'https://dummyjson.com/carts/add';

    const respuesta = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }

    return await respuesta.json();
};

export const fetchDataCategoria = async <T> (): Promise<T> => {
    const url = 'https://dummyjson.com/products/category-list';
    const respuesta = await fetch(url);
    
    // Manejo de errores si la respuesta no es exitosa
    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }

    // Parsear la respuesta JSON y devolverla
    return await respuesta.json();
};