import { getSaludo } from '../../src/base-pruebas/02-template-string.js';

describe('Pruebas en 02-template-string', () => { 
    
    test('getsaludo debe retornar "Hello, Neider Hernández"', () => {
         
        const name = 'Neider Hernández';
        const message = getSaludo(name);
        expect( message ).toBe(`Hello, ${ name }`);

    });
 }); 