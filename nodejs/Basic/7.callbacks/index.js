const { Console } = require('console')
const fs = require('fs')

// Callback 係放function only ??　

function person(name,callbackFn){
    console.log(`Hello ${name}`)
    callbackFn()
}

function address(){
    console.log('address')
}

person('SanTin',address)


fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error('Error reading file',err)
        return
    }

    console.log('File content:', data)
})