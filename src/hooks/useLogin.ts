import { useState } from 'react';
import { loginUserRequest } from '../proxy/authentication';
import { validaLogin } from '../utils/validaLogin';
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
  
    setErrors({ email: '', password: '', api: '' });
  
    const formErrors = validaLogin(email, password);
    if (Object.keys(formErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...formErrors }));
      return;
    }
    setLoading(true);
  
    try {
      const userData = await loginUserRequest(email, password);
      setUser(userData);
      // uso adicional del localstorage?
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
