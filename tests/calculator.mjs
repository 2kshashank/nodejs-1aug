import assert from "assert";
import calculator from "../calculator.mjs";

// Addition 
const result = calculator(3, "+", 4); // 7
assert.equal(result, 7, "Addition operation is not working properly.");

// Multiply 
const result1 = calculator(3, "x", 4); // 12
assert.equal(result1, 12, "Multiply operation is not working properly.");