import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas con Promesas', () => {
    test('getHeroeByIdAsync debe retornar un Heroe Async', (done) => {

        const id = 1;
        getHeroeByIdAsync ( id )
        .then( heroe => {
           expect( heroe ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
            done();
        })


    
    });

    test('getHeroeByIdAsync debe retonar error si el heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync ( id )
        .then( heroe => {
            expect( heroe ).toBeFalsy();
            done();
        })
        .catch( error => {
            expect( error ).toBe('No se pudo encontrar el héroe '+ id);
            //console.log(error);
            done();
        })
    });

});