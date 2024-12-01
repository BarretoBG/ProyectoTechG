import { validarCampo, Regex } from '../validaciones';

describe('validarCampo', () => {
  it('debe retornar "Campo obligatorio" si el campo está vacío', () => {
    expect(validarCampo("nombres", "")).toBe("Campo obligatorio");
    expect(validarCampo("apellidos", "")).toBe("Campo obligatorio");
    expect(validarCampo("celular", "")).toBe("Campo obligatorio");
  });

  it('debe retornar "Debe ingresar un valor válido" para los campos "nombres" y "apellidos" con caracteres no válidos', () => {
    expect(validarCampo("nombres", "1234")).toBe("Debe ingresar un valor válido");
    expect(validarCampo("apellidos", "1234")).toBe("Debe ingresar un valor válido");
    expect(validarCampo("nombres", "Juan123")).toBe("Debe ingresar un valor válido");
    expect(validarCampo("apellidos", "Pérez123")).toBe("Debe ingresar un valor válido");
  });

  it('no debe retornar error para nombres y apellidos válidos', () => {
    expect(validarCampo("nombres", "Juan")).toBe("");
    expect(validarCampo("apellidos", "Pérez")).toBe("");
    expect(validarCampo("nombres", "José María")).toBe("");
    expect(validarCampo("apellidos", "López Hernández")).toBe("");
  });

  it('debe retornar "Debe ingresar un número válido de 9 dígitos" para el campo "celular" con número incorrecto', () => {
    expect(validarCampo("celular", "12345678")).toBe("Debe ingresar un número válido de 9 dígitos");
    expect(validarCampo("celular", "1234567890")).toBe("Debe ingresar un número válido de 9 dígitos");
    expect(validarCampo("celular", "abc123456")).toBe("Debe ingresar un número válido de 9 dígitos");
  });

  it('no debe retornar error para celular válido', () => {
    expect(validarCampo("celular", "987654321")).toBe("");
  });
});
