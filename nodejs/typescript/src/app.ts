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