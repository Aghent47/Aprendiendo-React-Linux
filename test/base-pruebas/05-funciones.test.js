import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retorna un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        //toEqual es una funcion de jest que compara dos objetos
        expect(testUser).toEqual(user);
    });


    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = 'Neider Hernández';

        const user = getUsuarioActivo(name);

        expect(user).toEqual({uid: 'ABC567', username: name});



    });

 });