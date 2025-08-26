// Tipagem explicita em vetores e funções
let names:string[] = ["Luan","Igor"]
let numbers:number[] = [23, 45]

//Inferencia do Tipo
let products = ["P01", "P02"]

//Tipagem na função com e sem retorno
function sum(x:number,y:number):number{
    const result = x+y
    console.log("Resultado = "+ result)

    return result
}

const result = sum(7,3)

//Sintaxe de tipagem em função anônima
const showMessage = (name: string):string =>{
    const message = "Olá" + name
    return message
}

//Tipagem dos Objetos
let user:{name:string, age:number, avatarURL?:string}
user = {name:"Warley", age:23}

