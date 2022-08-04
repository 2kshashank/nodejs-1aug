const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const promisifiedReadfile = promisify(readFile);
const promisifiedWriteFile = promisify(writeFile);


function customReadFile(name, encoding){
    return new Promise(function(resolve, reject){
        readFile(name, encoding, (err, data)=>{
            if(err)
                {
                    return reject(err);
                }
            resolve(data)
        })
    })
}


// async await
console.log(1)
async function main() {
  try {
    const content = await customReadFile("./phonebook.json", "utf-8");
    console.log("content")
    await promisifiedWriteFile("./phonebook-promise.json", content);
    console.log("writing file completed")
    const content2 = await customReadFile(
      "./phonebook-promise.json",
      "utf-8"
    );
    console.log(content2);
  } catch (error) {
    console.log(error);
  }
}
main();
console.log(2)

// promisifiedReadfile("./phonebook.json", "utf-8")
// .then((content)=>{
//     return promisifiedWriteFile("./phonebook-promise.json", content).catch(()=>{})
// })
// .then(()=>{
//     return promisifiedReadfile("./phonebook-promise.json", "utf-8").catch(()=>{})
// })
// .then((contentCopy)=>{
//     console.log(contentCopy)
// })
// .catch(()=>{
//     console.log("error occured in reading file.");
// })

// readFile("./phonebook.json", "utf-8", (err, content) => {
//   if (err) {
//     console.log("error occured in reading file.");
//   }
//   writeFile("./phonebook-callback.json", content, () => {
//     readFile("./phonebook-callback.json", "utf-8", (errCopy, contentCopy) => {
//       if (errCopy) {
//         console.log("error occured.");
//       }
//       console.log(contentCopy);
//     });
//   });
// });

// function add(a, b, callback){
//     setTimeout(()=>{
//         callback(a + b)
//     }, 0)
// }

// 1 + 1 > result
// result + 5 > result2
// result2 + 7 > result3
// result3 + 20 > result4 > console.log

// add(1, 1, (result)=>{
//     add(result, 5, (result2)=>{
//         add(result2, 7, (result3)=>{
//             add(result3, 20, (result4)=>{
//                 console.log(result4);
//             })
//         })
//     })
// })

// const result = add(1, 2, (result)=>{ console.log(result) });

// // sync
// console.log(1)
// // sync
// console.log(2)
// // async
// setTimeout(()=>{ console.log(3) }, 3000)
// // async
// setTimeout(()=>{ console.log(4) }, 0)
// // async
// setTimeout(()=>{ console.log(4.1) }, 0)
// // async
// setTimeout(()=>{ console.log(4.2) }, 0)
// // async
// setTimeout(()=>{ console.log(4.3) }, 0)
// // sync
// console.log(5)
