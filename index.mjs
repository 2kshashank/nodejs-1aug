import fs from "fs";
import path from "path";

const filepath = "./contents/message.txt";

console.log(path.dirname(filepath));
console.log(path.extname(filepath));
console.log(path.isAbsolute(filepath));
console.log(path.basename(filepath));

fs.readFile("./contents/message.txt", (err, content) => {
  if (err) {
    console.log(err);
    console.log("Error occured while reading file.");
    return false;
  }

  console.log(content.toString());
});
