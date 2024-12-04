// no hay test que valide cada ruta tanto p'ublicas como privadas
// la p'agina CarDetail es accesible sin hacer login
import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import Home from "./pages/Home/Home";
import { CarDetail } from "./pages/CarDetail/CarDetail";
import { ModuleRoutes } from "./proxy/router";
import Login from "./pages/Login/Login";

const App: FC = () => {
  return (
    <UserProvider>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ModuleRoutes.Init} element={<Home />} />
          <Route path={ModuleRoutes.CartResume} element={<CarDetail />} />
          <Route path={ModuleRoutes.Login} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </UserProvider>
  );
};

export default App;

