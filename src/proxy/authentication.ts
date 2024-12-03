export const loginUserRequest = async (username: string, password: string) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // Opcional, por defecto es 60
        }),
      });
  
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('usuario o contraseña incorrectos');
        } else {
          throw new Error('Error de autenticación');
        }
      }
  
      const data = await response.json();
  
      // Comprobamos si los tokens fueron retornados
      if (data.accessToken && data.refreshToken) {
        // Guardamos los tokens en el almacenamiento local o cookies
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('userName', data.firstName);
        localStorage.setItem('refreshToken', data.lastName);
        localStorage.setItem('userEmail', data.email);
  
        // Devolvemos un objeto con los datos que usaremos en el contexto
        return {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        };
      }
  
      throw new Error('Tokens no disponibles');
    } catch (error: unknown) {
      throw error;
    }
  };
  