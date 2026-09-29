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


const fs = require('fs');

//create a new file
fs.writeFileSync('example.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File created successfully.');
});

// //Delete a file
// fs.unlinkSync('example.txt', (err) => {
//     if (err) throw err;np
//     console.log('File deleted successfully.');
// });

//delete the file after 5 seconds
setTimeout(() => {
    fs.unlink('example.txt', (err) => {
        if (err) throw err;
        console.log('File deleted successfully after 5 seconds.');
    });
}, 5000);
