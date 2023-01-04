import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas Component <FirstApp/>', () => {

    /* test('Debe de hacer math con el snapshot', () => {
    const { container } = render(<FirstApp title="Hola, Soy" />)
        
    expect(container).toMatchSnapshot();

    }); */

    test('debe mostrar el titulo en un <h1></h1>', () => { 
        
        const title = "Hola, soy";
        const { container, getByText, getByTestId  } = render(<FirstApp title ={ title }/>)

        expect( getByText(title) ).toBeTruthy();

        /* const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title); */
    
        expect(getByTestId('test-title').innerHTML).toContain(title)
    });

    test('Debe mostrar el subtitle enviado por props', () => {
       
        const title = "Hola, soy";
        const subtitle = "Hola, soy un subtitle";
        const { getAllByText } = render(
            <FirstApp 
            title = { title }
            subTitle = { subtitle }
            />)
        
        expect( getAllByText(subtitle).length ).toBe(2);

        
    });
});