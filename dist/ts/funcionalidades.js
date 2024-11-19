var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Filtrar productos
export const filtrarPorCategoria = (productos, categoria) => productos.filter(producto => producto.categoria === categoria);
export const filtrarPorTitulo = (productos, titulo) => productos.filter(producto => producto.titulo.toLowerCase().includes(titulo.toLowerCase()));
// Contador para carrito
let totalProductosEnCarrito = 0;
export const agregarAlCarrito = (idUsuario, productos) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: idUsuario, products: productos })
        });
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }
        totalProductosEnCarrito += productos.length;
        actualizarVisualCarrito(totalProductosEnCarrito);
    }
    catch (error) {
        console.error('Error al agregar productos al carrito:', error);
    }
});
export const actualizarVisualCarrito = (total) => {
    const contenedorCarrito = document.getElementById('carrito');
    let contador = document.getElementById('contador-carrito');
    if (!contador) {
        contador = document.createElement('span');
        contador.id = 'contador-carrito';
        contador.className = 'contador';
        contenedorCarrito === null || contenedorCarrito === void 0 ? void 0 : contenedorCarrito.appendChild(contador);
    }
    contador.textContent = total.toString();
};
