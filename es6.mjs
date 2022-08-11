// Simplify function defination
// Handling 'this' keyword.

setTimeout(()=>{
    console.log("1 sec")
}, 1000)

// function currentTimestamp(){
//     return new Date().toISOString()
// }

const currentTimestamp = () => new Date().toISOString() 

// function createRandomNumber(limit){
//     return Math.round(Math.random() * limit)
// }

const createRandomNumber = limit => Math.round(Math.random() * limit)

// function add(a, b){
//     return a + b;
// }

const add = (a, b) => a + b;

console.log(createRandomNumber(100))
console.log(currentTimestamp())
console.log(add(1, 5))

































// var a = "abc";
// let nameUsingLet = "qwerty"
// const nameUsingConst = "qweery"
// a = "def";
// console.log(a)

// if(1 === 1) {
//     nameUsingLet = "daskjdhskajdhjsad"
//     // nameUsingConst = "dasdsadsad"
//     const xyz = 12312313
// }

// console.log(xyz);

// console.log(nameUsingLet)





// // if(true) {
// //     var b = "qwerty"
// //     let bInsideIfCondition = "eruoiewuroqwer"
// // }

// // for (let index = 0; index < 3; index++) {
// //     setTimeout(()=>{ console.log(index) }, 0)
// // }

// // if(true)
// //     {
// //         var b = "ruweorwqiur"
// //     }

// // function c(){
// //     var name = "praveen"
// // }
// // c();

// // console.log(b)
// // // console.log(name)
// // console.log(nameUsingLet);
// // console.log(bInsideIfCondition);