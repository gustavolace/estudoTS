console.log("hello")

let nome: string = ""
//nome = 23 erro

let idade: number = 15
let aux: null = null
/* let code: symbol = Symbol() */

function hello(text: string): void {
    console.log(text)
}

hello("Oi")

"any" //quarlquer coisa
"void"
"null"
"enum"
"symbol"
"leterais"


function calc(a: number, b: number, operador: "soma" | "subtração"): number | undefined | void {
    if (operador == "soma") {
        return a + b
    }
    if (operador == "subtração") {
        return a - b
    }
console.log("nobody else")
}
calc(1, 2, "subtração")

type Idade = /* string | number */ 0 | 5 | 10 | 15 | 20 | 25
let age: Idade = 5
console.log(age)

type Numeros = 5 | 10 | 48

type Q = Idade & Numeros

let q: Q = 5

console.log(q)

type User = {
    nome: string
    idade?: number | undefined
    parabens: (texto:string) => void
}

interface gato extends User{
    hello: string
}

interface as {
    nome: string
    idade?: number | undefined
    parabens: (texto:string) => void
}

let user:User = {
    nome: "",
    idade: 14,
    parabens: (texto) => texto,
}

let users: number[]= [

]

user.parabens("text")