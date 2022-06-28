class Calculadora {
  //funcion que suma
  // return num
  sumar(num1, num2) {
    return num1 + num2;
  }
  //funcion que resta//
  restar(num1, num2) {
    return num1 - num2;
  }
  //funcion que divide//
  dividir(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    }
    return "no puede dividir por cero";
  }
  //funcion que multiplica//
  multiplicar(num1, num2) {
    return num1 * num2;
  }
}
