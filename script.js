// Function, parameters (variable and type), :string (expected output)
function greet(name) {
    return "Hello! ".concat(name);
}
console.log(greet("nash"));
function showBackpack(b) {
    return b; // Now it returns something (or anything)
}
console.log(showBackpack({ id: "BP1", product: "Laptop", quantity: 2 }));
// showBackpack({ id: "BP2", product: { name: "Phone", price: 999 }, quantity: 1 });
// This is how you objectify base on the interface or blueprint
var user = {
    id: 20,
    name: "Dikson",
};
console.log("Testing if const user runs: ", user);
// Array in TS
var numbers = [1, 2, 3, 4];
var names = ["Nash", "Dikson", "Alex"];
var numbers2 = [5, 6, 7, 8];
var names2 = ["John", "Mike", "Sara"];
// Testing Nash's Knowledge
// Implicit no "return" keyword
// Explicit have "return" keyword
var arrowFunc = function (name) {
    return name;
};
var arrowFuncObj = function (id, name) {
    return {
        id: id,
        name: name
    };
};
var studentInfo = function (id, name, department) {
    return {
        id: id,
        name: name,
        department: department
    };
};
console.log(studentInfo(10, "Nash Maglaqui", "School of Engineering and Architecture"));
