import calculator from "../calculator"
import chai, { expect } from "chai"
import chaiHttp from "chai-http";
import { server } from "../server"

chai.use(chaiHttp);

// const calculator = require("../calculator.js")
// const { expect } = require("chai")

describe("Testing API", ()=>{

    it("should return list of users", async ()=>{
        const response = await chai.request(server)
        .get("/api/users");
        expect(response).to.have.status(200)
        expect(response.body.length).greaterThan(0)
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
