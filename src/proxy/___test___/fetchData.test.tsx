import { fetchData, fetchDataCategoria } from '../fetchData';

global.fetch = jest.fn();

describe('fetchService', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('fetchData debe devolver los datos correctamente', async () => {
        const mockResponse = { products: [{ id: 1, name: 'Producto 1' }] };
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await fetchData<typeof mockResponse>();

        expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products');
        expect(result).toEqual(mockResponse);
    });

    it('fetchData debe lanzar un error si la respuesta no es válida', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
        });

        await expect(fetchData()).rejects.toThrow('Error en la solicitud: 404');
        expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products');
    });

    it('fetchDataCategoria debe devolver las categorías correctamente', async () => {
        const mockResponse = ['Electronics', 'Furniture', 'Clothing'];
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await fetchDataCategoria();

        expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products/category-list');
        expect(result).toEqual(mockResponse);
    });

    it('fetchDataCategoria debe lanzar un error si la respuesta no es válida', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        await expect(fetchDataCategoria()).rejects.toThrow('Error en la solicitud: 500');
        expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products/category-list');
    });
});
