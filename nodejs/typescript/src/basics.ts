// npm init -y ,  npm i typescript @types/node ts-node , npx tsc --init

import { log } from "node:console";

log('Hello Node js from typescript');

// Basic Type

let isDone : Boolean = false
let num : number = 100
let str : string = "Man"
let list : number[] = [ 1 , 2 , 3 ]
let products : Array<string> = ['product1','product2','product3']

let randomVal : any = 4
let xyz : undefined = undefined
let yyy : null = null

enum Color {
    Red, Green, Blue
}

let d : Color = Color.Green

// tuple
let abc : [string, number] = ["hi", 400];

// interfaces, types
interface User {
    name: String;
    id: number;
    email? : string;  //optional
    readonly createdAt: Date
}

const user : User = {
    name: 'John Doe',
    id: 1,
    email : 'john@example.com',
    createdAt : new Date()
}

type Product = {
    title : string;
    price : number
}

const product1 : Product = {
    title : 'product1',
    price : 100
}

// functions with type annotations
function multiply(a : number, b : number) : number{
    return a*b
}

const add = (num1 : number, num2 : number) : number => {
    return num1 + num2
}

function greet(name : string, greeting? : string) : string{
    return `${name} ${greeting}`
}

console.log(greet("Cyrus","fuck Off"))