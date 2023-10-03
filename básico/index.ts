//tipos básicos 
const nome: string = 'aramis'
const idade: number = 25
const ToF: boolean = true

const nomes: Array<string> = ['flavia','jose','mc']
const idades: Array<number> = [1,2,3]

//utilizando juntos a uma função
const sum = (valor1: number, valor2: number): number =>{
    return valor1 + valor2
}
sum(2,3)

//tipando elementos do DOM, alguns exemplos

// HTMLLIElement para itens de uma lista
// HTMLParagraphElement para um parágrafo 

const a: HTMLParagraphElement =  document.createElement("p")

// Classes

class Dog{
    name:string = ""
    weight: number = 0
    color: string = ""
    breed: string = ""
    size: number = 0
}
//criando um objeto baseado na classe

const dog: Dog = new Dog() //criando baseado na classe
//acessando as propriedades
dog.name
dog.weight
dog.color 
// sempre que definimos uma classe, o TS cria também um tipo correspondente a ela



