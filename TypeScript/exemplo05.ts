//Tipos personalizados no TS

interface Product{
    id: number,
    name: string,
    value: number
}

function newProduct(product: Product){

} 

newProduct({id:1, name:"Remedio", value: 23})

// Como estender interfaces

interface Person {
    id: number,
    name: string,
}

interface Teacher extends Person {
    subjects: string[]
}

interface Student extends Person {
    age: number
}

let teacher:Teacher = {id:1, name:"Luan", subjects:["JS", "TS"]}

// Usando type
type Product02 = {
    id: number,
    name: string
}

function newProduct02(product: Product02){

}

newProduct02({id:3, name:"Luan"})

// Como estender com Type
type Person02 = {
    id: number,
    name: string,
}

type Teacher2 = Person & {
    subjects: string[]
}

type Student2 = Person & {
    age: number
}

