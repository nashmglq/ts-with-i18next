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



