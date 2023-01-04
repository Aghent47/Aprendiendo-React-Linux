import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas Component <FirstApp/>', () => {
    test('Debe de hacer math con el snapshot', () => {
        render(<FirstApp title="Hola, Soy" />)
        
    });
});