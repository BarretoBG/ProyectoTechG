var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { agregarAlCarrito } from './funcionalidades';
export const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const respuesta = yield fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }
    return yield respuesta.json();
});
export const crearItem = (producto) => {
    const item = document.createElement('div');
    item.className = 'item';
    const idProducto = document.createElement('input');
    idProducto.type = 'hidden';
    idProducto.id = 'idItem';
    idProducto.value = producto.id.toString();
    const img = document.createElement('img');
    img.className = 'img-producto';
    img.src = producto.imagenes[0];
    const categoria = document.createElement('h3');
    categoria.textContent = producto.categoria;
    const titulo = document.createElement('p');
    titulo.id = 'titulo';
    titulo.textContent = producto.titulo;
    const precio = document.createElement('h2');
    precio.id = 'precio';
    precio.textContent = `S/.${producto.precio}`;
    const boton = document.createElement('button');
    boton.textContent = 'Agregar al carrito';
    boton.addEventListener('click', () => {
        agregarAlCarrito(1, [{ id: producto.id.toString(), cantidad: 1 }]);
    });
    item.append(idProducto, img, categoria, titulo, precio, boton);
    return item;
};
