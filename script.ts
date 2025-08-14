// Function, parameters (variable and type), :string (expected output)

function greet(name: string): string{
    return `Hello! ${name}`
}

console.log(greet("nash"))

// Interface, blueprint of an object (type)
interface User{
    id: number;
    name: string;
    isAdmin? : boolean;
}

// Generics: Think of it as params and argu, you can put what ever you want
interface Backpack<T> {
    id: string;
    product: T;
    quantity: number;
}

function showBackpack<T>(b: Backpack<T>) {
    return b; // Now it returns something (or anything)
}

console.log(showBackpack({ id: "BP1", product: "Laptop", quantity: 2 }));
// showBackpack({ id: "BP2", product: { name: "Phone", price: 999 }, quantity: 1 });

// This is how you objectify base on the interface or blueprint
const user : User = {
    id : 20,
    name: "Dikson",
}

console.log("Testing if const user runs: ",user)

// Array in TS
const numbers: number[] = [1, 2, 3, 4];
const names: string[] = ["Nash", "Dikson", "Alex"];

const numbers2: Array<number> = [5, 6, 7, 8];
const names2: Array<string> = ["John", "Mike", "Sara"];


// Testing Nash's Knowledge

// Implicit no "return" keyword
// Explicit have "return" keyword

const arrowFunc = (name: string) : string => {
    return name
}


const arrowFuncObj = (id: number, name: string) : User => {
    return {
        id: id,
        name: name
    }
}

// console.log(arrowFunc("Nash"))

console.log(arrowFuncObj(100, "wow"))