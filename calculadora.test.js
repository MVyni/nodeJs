const calculadora = require("./calculadora");

test('Somar um mais um é igual a dois', () => {
    expect(calculadora.somar(1,1)).toBe(2)
 });
test('subtrair dois menos um é igual a um', () => {
    expect(calculadora.subtrair(2,1)).toBe(1)
 });
test('multiplicar tres vezes dois é igual a seis', () => {
    expect(calculadora.multiplicar(3,2)).toBe(6)
 });
test('dividir quatro por dois é igual a dois', () => {
    expect(calculadora.dividir(4,2)).toBe(2)
 });
test('multiplicar com numUm  maior que 1 vai dar o mesmo resultado', () => {
    expect(calculadora.multiplicar(2,2)).toBe(4)
 });