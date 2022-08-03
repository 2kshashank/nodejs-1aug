const fs = require("fs");


// Async
console.log("Reading File")
fs.readFile("./phonebook.json", (err, data)=>{
    console.log(`File content ${data}`);
})
console.log("Ending File")


// Sync
console.log("SYNC Starting read file");
const content = fs.readFileSync("./phonebook.json");
console.log(`SYNC File contents - ${content}`)
console.log("SYNC Ending read file");

// console.log("Starting read file");
// const content1 = fs.readFileSync("./LICENSE");
// console.log(`File contents - ${content1}`)
// console.log("Ending read file");

// console.log("Starting read file");
// const content2 = fs.readFileSync("./README.md");
// console.log(`File contents - ${content2}`)
// console.log("Ending read file");