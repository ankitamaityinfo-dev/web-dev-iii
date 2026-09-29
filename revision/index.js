// const os = require('os');

// console.log('Operating System Information:');
// console.log(`Platform: ${os.platform()}`);
// console.log(`Architecture: ${os.arch()}`);
// console.log(`CPU Cores: ${os.cpus().length}`);
// console.log(`Total Memory: ${os.totalmem()} bytes`);
// console.log(`Free Memory: ${os.freemem()} bytes`);
// console.log(`Home Directory: ${os.homedir()}`);


// const path = require('path');

// console.log('Path Information:');
// console.log(`Directory Name: ${path.dirname(__filename)}`);
// console.log(`File Name: ${path.basename(__filename)}`);
// console.log(`File Extension: ${path.extname(__filename)}`);
// console.log(`Joined Path: ${path.join(__dirname, 'test', 'hello.txt')}`);


// const fs = require('fs');

// //create a new file
// fs.writeFileSync('example.txt', 'Hello, World!', (err) => {
//     if (err) throw err;
//     console.log('File created successfully.');
// });

// // //Delete a file
// // fs.unlinkSync('example.txt', (err) => {
// //     if (err) throw err;np
// //     console.log('File deleted successfully.');
// // });

// //delete the file after 5 seconds
// setTimeout(() => {
//     fs.unlink('example.txt', (err) => {
//         if (err) throw err;
//         console.log('File deleted successfully after 5 seconds.');
//     });
// }, 5000);


// const fsp = require('fs/promises');
// async function readFileAsync() {
//     try {
//         const data = await fsp.readFile('notes.txt', 'utf-8');
//         console.log('File content:');
//         console.log(data);
//     } catch (error) {
//         console.error('Error reading file:', error);
//     }
// }
// readFileAsync();


//CRYPTO MODULE
// const crypto = require('crypto');
// const hash = crypto.createHash('sha256');
// hash.update('Hello, World!');
// const digest = hash.digest('hex');
// console.log(`SHA-256 Hash: ${digest}`);

// console.log(crypto.randomUUID());

//DNS MODULE
    // const dns = require('dns');
    // dns.lookup('www.google.com', (err, address, family) => {
    //     if (err) {
//         console.error('DNS lookup error:', err);
    

//PROCESS OBJECT: it is a build in object in node.js that provides information about the current node.js process and allows you to interact with it.
