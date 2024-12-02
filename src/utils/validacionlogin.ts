type ValidationErrors = {
    email?: string;
    password?: string;
  };
  
  const validateForm = (email: string, password: string): ValidationErrors => {
    const errors: ValidationErrors = {};
  
    if (!email) {
      errors.email = 'El usuario es obligatorio.';
    }
  
    if (!password) {
      errors.password = 'La contraseña es obligatoria.';
    }
  
    return errors;
  };
  
  export { validateForm };
  