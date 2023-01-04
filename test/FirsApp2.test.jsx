import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas Component <FirstApp/>', () => {

    const title = 'Hola, soy Neider Herández';
    const subTitle = 'Software Engineer';

    test('debe de hacer match con el snapshot', () => { 
        
        const { container } = render(< FirstApp title={ title } />)
        
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, soy Neider Hernández"', () => { 

        render(< FirstApp title={ title }/>)
        /* screen.debug();  */// obtenemos la ultima version de un componente renderizado
        expect(screen.getByText(title)).toBeTruthy();
     });

     test('debe de mostrar el titulo en un <h1></h1>', () => { 

        render(< FirstApp title={ title }/>)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)

      });

      test('debe mosreae el subtitulo enviado por la props', () => { 

        render(<FirstApp title={ title }
        subTitle={subTitle}
        />)

        expect( screen.getAllByText(subTitle).length ).toBe(2);

       })
    
});