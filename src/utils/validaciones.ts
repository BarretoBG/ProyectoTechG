export const Regex = {
    NOMBRES: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    APELLIDOS: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    CELULAR: /^\d{9}$/,
  } as const;
  
  export type Campo = "nombres" | "apellidos" | "celular";
  
  export const validarCampo = (campo: Campo, valor: string): string => {
    if (!valor) return "Campo obligatorio";
  
    switch (campo) {
      case "nombres":
      case "apellidos":
        if (!Regex.NOMBRES.test(valor)) return "Debe ingresar un valor válido";
        break;
      case "celular":
        if (!Regex.CELULAR.test(valor)) return "Debe ingresar un número válido de 9 dígitos";
        break;
      default:
        break;
    }
  
    return "";
  };