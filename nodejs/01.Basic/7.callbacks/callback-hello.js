const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error('Error reading file',err);
        return
    }
    const modifyFileData = data.toUpperCase();

    fs.writeFile('output.txt', modifyFileData, (err) => {
        if(err) {
            console.error('Error reading file',err);
            return
        }

        console.log('data written to file successfully')

        fs.readFile('output.txt', 'utf-8', (err, data) => {
            if(err) {
                console.error('Error reading file',err);
                return
            }
            console.log('File content:', data)
        })
    })
})