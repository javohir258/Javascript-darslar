const fs = require('fs')

// fs.writeFile("message.txt" , 'Salom nodejs' , (err) => {
//     if (err) throw err
//     console.log('File saqlandi')
// })

// import { readFile } from 'node:fs';

// fs.readFile('message.txt', 'utf8' , (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })

fs.unlinkSync("message.txt")

