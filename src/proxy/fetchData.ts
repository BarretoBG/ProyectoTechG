const baseUrl = 'https://dummyjson.com';

export const fetchData = async <T>(): Promise<T> => {
    const link = `${baseUrl}/products`;
    const respuesta = await fetch(link);

    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }

    return await respuesta.json();
};

export const fetchDataCategoria = async (): Promise<string[]> => {
    const link = `${baseUrl}/products/category-list`;
    const respuesta = await fetch(link);

    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }

    return await respuesta.json();
};
