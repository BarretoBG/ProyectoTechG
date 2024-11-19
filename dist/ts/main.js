var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchData } from "./utils";
import { mapperProductos } from "./mappers";
import { crearItem } from "./utils";
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const datos = yield fetchData('https://dummyjson.com/products');
        const conjuntoItems = document.getElementById('conjunto-items');
        if (conjuntoItems) {
            mapperProductos(datos.products, conjuntoItems, crearItem);
            console.log(datos.products);
        }
    }
    catch (error) {
        console.error('Error al obtener los productos:', error);
    }
});
window.onload = getAllProducts;
