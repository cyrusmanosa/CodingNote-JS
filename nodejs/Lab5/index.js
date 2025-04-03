const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Data folder created');
}

const filePath = path.join(dataFolder, 'example.txt');
// sync way of creating the file
fs.writeFileSync(filePath, 'Hello from node js')
console.log("file created successfully")

const readContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log('File content:', readContentFromFile);

fs.appendFileSync(filePath, '\nThis is a new line added to that file')
console.log('new file content added')


// async way of creating the file
const asyncFilePath = path.join(dataFolder, 'async-Example.txt');
fs.writeFile(asyncFilePath,'Hello, Async node js', (err) => {
    if (err) throw err;
    console.log('Async file created successfully');

    fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log('Async file content:', data);

        fs.appendFile(asyncFilePath, '\nThis is another line added', (err) => {
            if (err) throw err;
            console.log('New line added to async file successfully');

            fs.readFile(asyncFilePath, 'utf-8', (err, updateData) => {
                if (err) throw err;
                console.log('Updated async file content:', updateData);
            });
        });
    })
});