import { useState } from 'react';
import { loginUserRequest } from '../proxy/authentication'; // Ahora importamos loginUserRequest
import { validateForm } from '../utils/validacionlogin';
import { ModuleRoutes } from "../proxy/router";
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', api: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Limpiar errores anteriores
    setErrors({ email: '', password: '', api: '' });
  
    // Validar campos
    const formErrors = validateForm(email, password);
    if (Object.keys(formErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...formErrors }));
      return;
    }
    setLoading(true);
  
    try {
      // Llamar a la función que hace la petición de login
      const userData = await loginUserRequest(email, password);
      alert('Login exitoso!');
      console.log(userData); // Aquí puedes redirigir al usuario o guardar su estado
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
        setErrors((prev) => ({ ...prev, api: 'Error de autenticación' }));
      } finally {
        setLoading(false);
      }
  
      navigate(ModuleRoutes.Init);
  };  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    email,
    password,
    errors,
    isModalOpen,
    loading,
    setEmail,
    setPassword,
    handleSubmit,
    openModal,
    closeModal,
  };
};
