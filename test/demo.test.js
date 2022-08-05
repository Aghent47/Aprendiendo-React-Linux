describe("Pruebas en <DemoComponent>", () => {
  test("Primera Prueba", () => {
    
    //1. Inizializamos
    const mensaje = "Hola Mundo";
    
    //2. Estimulo
    const mensaje2 = mensaje.trim();

    //3. Observar el comportamiento esperado.
    expect(mensaje).toBe(mensaje2);
  });
});
