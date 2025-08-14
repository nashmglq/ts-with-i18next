// Function, parameters (variable and type), :string (expected output)
function greet(name) {
    return "Hello! ".concat(name);
}
console.log(greet("nash"));
function showBackpack(b) {
    return b; // Now it returns something
}
console.log(showBackpack({ id: "BP1", product: "Laptop", quantity: 2 }));
// showBackpack({ id: "BP2", product: { name: "Phone", price: 999 }, quantity: 1 });
console.log("Test");


const testFunc = () => {
    return "Good"
}

console.log(testFunc())