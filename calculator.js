function calculator(numb1, oper, numb2) {
  console.log("Welcome to Calculator.");
  const numberOne = Number(numb1);
  const operation = oper;
  const numberTwo = Number(numb2);

  console.log(`You have entered - ${numberOne}, ${numberTwo} for ${operation}`);

  switch (operation) {
    case "+":
      return numberOne + numberTwo

    case "-":
      return numberOne - numberTwo

    case "x":
      return numberOne * numberTwo

    case "/":
      return numberOne / numberTwo

    default:
      return null
  }
}

module.exports = calculator;