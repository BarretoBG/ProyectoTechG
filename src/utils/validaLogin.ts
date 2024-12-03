type ValidaErrores = {
    email?: string;
    password?: string;
  };
  
  const validaLogin = (email: string, password: string): ValidaErrores => {
    const errors: ValidaErrores = {};
  
    if (!email) {
      errors.email = 'El usuario es obligatorio.';
    }
  
    if (!password) {
      errors.password = 'La contraseña es obligatoria.';
    }
  
    return errors;
  };
  
  export { validaLogin as validaLogin };
  