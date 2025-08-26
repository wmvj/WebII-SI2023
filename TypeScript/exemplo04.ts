// undefined
let value: number
value = 12
console.log(value)

let user = {
    name: "Luan"
}

console.log(user.name)

// Null (ausencia intencional de valor)

let email = null
console.log(email)

if (!email){
    console.log("Informe o e-mail")
}

// União dos Tipos
let response: string | null

response = "Teste"
response = null