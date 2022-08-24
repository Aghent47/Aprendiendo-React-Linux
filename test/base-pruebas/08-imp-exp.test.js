import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas para Determinar un Heroe oir nombre o owner', () => { 
    
    test('getHeroeById - Determinar un Héroe por Id', () => {

        const id = 1;

        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({id: 1, name: 'Batman', owner: 'DC'});


    });

    test('getHeroeById debe retornar undefined si no existe el id', () => {

        const id = 100;

        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy();//null undefined or false


    });



    test('getHeroesByOwner debe retornar los heroes por owner', () => {
        
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);

        expect( heroesDC.length ).toBe( 3 );
        expect( heroesDC ).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'},
            {id: 3, name: 'Superman', owner: 'DC'},
            {id: 4, name: 'Flash', owner: 'DC'}
        ]);

        expect( heroesDC ).toEqual( heroesDC.filter( (heroe) => heroe.owner === owner )) // Metodo OK!!!

    });

    test('getHeroesByOwner debe retornar los heroes por owner', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);
        expect( heroesMarvel.length ).toEqual(2)
        expect( heroesMarvel ).toEqual([
            {id: 2, name: 'Spiderman', owner: 'Marvel'},
            {id: 5, name: 'Wolverine', owner: 'Marvel'}
        ]);

        expect( heroesMarvel ).toEqual( heroesMarvel.filter( (heroe) => heroe.owner === owner )) // Metodo OK!!!
    });

 });