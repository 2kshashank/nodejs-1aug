import calculator from "../calculator"
import {expect} from "chai"

// const calculator = require("../calculator.js")
// const { expect } = require("chai")

describe("Testing calculator", ()=>{

    it("should add two numbers", ()=>{
        const result = calculator(2, "+", 3);
        expect(result).eq(5)
    })

    it("should subtract two numbers", ()=>{
        const result = calculator(2, "-", 3);
        expect(result).eq(-1)
    })

    it("should multiply two numbers", ()=>{
        const result = calculator(3, "x", 4); // 12
        expect(result).greaterThan(10)
    })

})

















// import assert from "assert";
// import calculator from "../calculator.mjs";

// // Addition 
// const result = calculator(3, "+", 4); // 7
// assert.equal(result, 7, "Addition operation is not working properly.");

// // Multiply 
// const result1 = calculator(3, "x", 4); // 12
// assert.equal(result1, 12, "Multiply operation is not working properly.");
