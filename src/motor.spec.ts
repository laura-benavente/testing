import {  dameCarta, getValueToSum, obtenerEstadoPartida } from './motor';

describe('obtenerEstadoPartida', () => {
  it('Debería devolver ¡ Lo has clavado! ¡Enhorabuena! si los puntos son 7.5', () => {
    //Arrange
    const score: number = 7.5;
    const expected = '¡ Lo has clavado! ¡Enhorabuena!';
    //Act
    const result = obtenerEstadoPartida(score);
    //Asssert
    expect(result).toBe(expected);
  });

  it('Debería devolver Game Over si los puntos son 8', () => {
    //Arrange
    const score: number = 8;
    const expected = 'Game Over';
    //Act
    const result = obtenerEstadoPartida(score);
    //Asssert
    expect(result).toBe(expected);
  });

  it('Debería devolver Has sido muy conservador si los puntos son 3.5', () => {
    //Arrange
    const score: number = 3.5;
    const expected = 'Has sido muy conservador';
    //Act
    const result = obtenerEstadoPartida(score);
    //Asssert
    expect(result).toBe(expected);
  });

  it('Debería devolver Te ha entrado el canguelo eh? si los puntos son 5', () => {
    //Arrange
    const score: number = 5;
    const expected = 'Te ha entrado el canguelo eh?';
    //Act
    const result = obtenerEstadoPartida(score);
    //Asssert
    expect(result).toBe(expected);
  });

  it('Debería devolver Casi casi... si los puntos son 6.5', () => {
    //Arrange
    const score: number = 6.5;
    const expected = 'Casi casi...';

    //Act
    const result = obtenerEstadoPartida(score);

    //Asssert
    expect(result).toBe(expected);
  });
});

describe('dameCarta', () => {
  it('Debería devolver 1 si el número es 1', () => {
    //Arrange
    const number = 1;
    const esperado = 1;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 2 si el número es 2', () => {
    //Arrange
    const number = 2;
    const esperado = 2;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 3 si el número es 3', () => {
    //Arrange
    const number = 3;
    const esperado = 3;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 4 si el número es 4', () => {
    //Arrange
    const number = 4;
    const esperado = 4;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 5 si el número es 5', () => {
    //Arrange
    const number = 5;
    const esperado = 5;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 6 si el número es 6', () => {
    //Arrange
    const number = 6;
    const esperado = 6;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 7 si el número es 7', () => {
    //Arrange
    const number = 7;
    const esperado = 7;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });

  // OPCIONAL
  it('Debería devolver 10 si el número es 8', () => {
    //Arrange
    const number = 8;
    const esperado = 10;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 11 si el número es 9', () => {
    //Arrange
    const number = 9;
    const esperado = 11;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 12 si el número es 10', () => {
    //Arrange
    const number = 10;
    const esperado = 12;
    //Act
    const result = dameCarta(number);
    //Assert
    expect(result).toBe(esperado);
  });
});

// OPCIONAL 2

it('Debería devolver 1 si el número es 1', () => {
  //Arrange
  const number = 1;
  const esperado = 1;
  //Act
  const result = getValueToSum(number);
  //Assert
  expect(result).toBe(esperado);
});
it('Debería devolver 2 si el número es 2', () => {
  //Arrange
  const number = 2;
  const esperado = 2;
  //Act
  const result = getValueToSum(number);
  //Assert
  expect(result).toBe(esperado);
});
it('Debería devolver 3 si el número es 3', () => {
  //Arrange
  const number = 3;
  const esperado = 3;
  //Act
  const result = getValueToSum(number);
  //Assert
  expect(result).toBe(esperado);
});
it('Debería devolver 4 si el número es 4', () => {
  //Arrange
  const number = 4;
  const esperado = 4;
  //Act
  const result = getValueToSum(number);
  //Assert
  expect(result).toBe(esperado);
});
it('Debería devolver 5 si el número es 5', () => {
  //Arrange
  const number = 5;
  const esperado = 5;
  //Act
  const result = getValueToSum(number);
  //Assert
  expect(result).toBe(esperado);
});
it('Debería devolver 6 si el número es 6', () => {
  //Arrange
  const number = 6;
  const esperado = 6;
  //Act
  const result = getValueToSum(number);
  //Assert
  expect(result).toBe(esperado);
});
it('Debería devolver 7 si el número es 7', () => {
  //Arrange
  const number = 7;
  const esperado = 7;
  //Act
  const result = getValueToSum(number);
  //Assert
  expect(result).toBe(esperado);
});
describe('getValueToSum', () => {
  it('Debería devolver 0.5 si el número es 10', () => {
    //Arrange
    const number = 10;
    const esperado = 0.5;
    //Act
    const result = getValueToSum(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 0.5 si el número es 11', () => {
    //Arrange
    const number = 11;
    const esperado = 0.5;
    //Act
    const result = getValueToSum(number);
    //Assert
    expect(result).toBe(esperado);
  });

  it('Debería devolver 0.5 si el número es 12', () => {
    //Arrange
    const number = 12;
    const esperado = 0.5;
    //Act
    const result = getValueToSum(number);
    //Assert
    expect(result).toBe(esperado);
  });
});