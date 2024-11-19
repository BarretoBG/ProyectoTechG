import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext'; // Importa el contexto
import Home from "./pages/Home/Home";
import { CarDetail } from "./pages/CarDetail/CarDetail";
import { ModuleRoutes } from "./proxy/router";

const App: FC = () => {
  return (
    <CartProvider> {/* Proveemos el contexto para toda la aplicación */}
      <BrowserRouter>
        <Routes>
          <Route path={ModuleRoutes.Init} element={<Home />} />
          <Route path={ModuleRoutes.CarResume} element={<CarDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

