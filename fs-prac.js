const fs = require('fs');

// reading a file Sync
const readFile = fs.readFileSync("./lorem.txt", 'utf-8')

// reading a file normally
const readFileNormal = fs.readFile("./lorem.txt", "utf-8", (err, data)=> {
    if (err){
        throw new Error(err)
    }
    else{
        console.log(data);
    }
})

console.log(readFile);
console.log(readFileNormal);


/* Notes:
# readFile is a asynchronous method which reads the entire file into memory and then provides content via callback.

# readFileSync is a synchronous method which also entire file into memory and returns its content.
    The execution halts until the file is completely read.

*/


