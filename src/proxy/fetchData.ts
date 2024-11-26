// el dominio del api se repite, esto podr'ia centralizarse en un archivo aparte

export const fetchData = async <T>(): Promise<T> => {
    const url = 'https://dummyjson.com/products';
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }
    
    return await respuesta.json();
};

// por qu'e no tipar el body? si no se tipa puede recibir cualquier valor
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

export const fetchDataCategoria = async (): Promise<string[]> => {
    const url = 'https://dummyjson.com/products/category-list';
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }

    return await respuesta.json();
};
