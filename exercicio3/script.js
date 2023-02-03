// PARTE I

/* const op1 = (5 > 20 && 5 < 2)
console.log(op1)

const op2 = (5 === 5 || 5 === '5')
console.log(op2)

const op3 = !(20 > 50)
console.log(op3)

const op4 = !(20 > 50 || 50 > 60)
console.log(op4) */

// PARTE II

const salarifixo = 2000
const auxiliocreche = 45.50 * 2

const salarioBenef = salarifixo + auxiliocreche
console.log(`Salario beneficio é:${salarioBenef}`)

const comissaoJan = 5784.50 * 0.1
console.log(`Comissão Janeiro:${comissaoJan}`)

const desJan =(salarifixo + comissaoJan)* 0.05
console.log(`Desconto INSS é: ${desJan}`)

const comissaoFev = 3418.41 * 0.1
const comissaoMar = 4124.10 * 0.1
const comissaoAbr = 1874.00 * 0.1
const comissaoMai = 7000.00 * 0.1
const comissaoJun = 9450.00 * 0.1

const desFev = (salarifixo + comissaoFev) * 0.05
const desMar =(salarifixo + comissaoMar)  * 0.05
const desAbr = (salarifixo + comissaoAbr)  * 0.05
const desMai =(salarifixo + comissaoMai)  * 0.05
const desJun =(salarifixo + comissaoJun)  * 0.05

const salJan = (salarioBenef + comissaoJan) - desJan
const salFev =(salarioBenef + comissaoFev) - desJan
const salMar =(salarioBenef + comissaoMar) - desJan
const salAbr =(salarioBenef + comissaoAbr) - desJan
const salMai =(salarioBenef + comissaoMai)- desJan
const salJun = (salarioBenef + comissaoJun) - desJan

console.log(`Salário JAN:${salJan}`)
console.log(`Salário Fev:${salFev}`)
console.log(`Salário MAR:${salMar}`)
console.log(`Salário ABR:${salAbr}`)
console.log(`Salário MAI:${salMai}`)
console.log(`Salário JUN:${salJun}`)

const mediaSalario = (salJan + salFev + salMar + salAbr + salMai + salJun) / 6
console.log(`A media Salarial é:${mediaSalario}`)







