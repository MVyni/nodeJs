const calculadora = require("./calculadora");

test('calculo por km rodados', () => {
    expect(calculadora.kmRodados(34,"gasolina")).toBeCloseTo(2.12)
    expect(calculadora.kmRodados(27,"etanol")).toBeCloseTo(2.45)
 });
