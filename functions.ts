// 1. What is the purpose of functions in TypeScript?

// Allow you to encapsulate reusable blocks of code. 
// They provide a way to group related instructions and perform specific tasks. 
// Functions can accept parameters, perform operations, and return values.
// -----------------------------------------------------------------------------------
// The purpose of functions in TypeScript is to encapsulate reusable blocks of code, 
// perform specific tasks, and promote modular development and code reusability.

// 2. Define a function named calculateSum that takes two parameters num1 and num2, both of type number, and returns their sum. Write the function code.

function calculateSum(num1: number, num2: number): number {
    return num1 + num2;
}

// 3. Explain the purpose of the void return type in a function.

// When used void denote that function not return any value.
// -----------------------------------------------------------------------------------
// The void return type in a function indicates that the function does not return a value. 
// It is used for functions that perform actions or side effects without producing a result or returning meaningful data.

// 4. Write a function named printName that takes an optional parameter name of type string. The function should log “Hello, {name}!” if the name parameter is provided, and “Hello!” otherwise. Write the function code.

function printName(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Hello!");
    }
}

// -----------------------------------------------------------------------------------

// 1. What is a function type in TypeScript?

// A function type in TypeScript represents the type signature of a function, including the parameter 
// types and the return type. It specifies the expected structure and behavior of a function.

// 2. Define a function type named MathOperation that represents a function taking two parameters of type number and returning a number. Write the function type code.

type MathOperation = (a: number, b: number) => number;

// 3. Explain how function types can be used to enforce type safety in variable declarations.

// Function types can be used to enforce type safety in variable declarations by explicitly specifying 
// the expected function signature. When a variable is declared with a specific function type, 
// TypeScript checks that the assigned value matches the defined function type. 
// It ensures that the assigned value is a function with compatible parameter types and return type, 
// preventing type errors and promoting type correctness.

// Example usage:
const addType: MathOperation = (a: number, b: number): number => a + b;

// In this example, the add variable is declared with the MathOperation function type. 
// Assigning an arrow function that takes two parameters of type number and returns a number satisfies 
// the function type. If you try to assign a value that doesn’t match the function type, TypeScript 
// will report a type error.

// 4. Write a function type named Greeting that represents a function without any parameters and returning void. Write the function type code.

type Greeting = () => void;

// -----------------------------------------------------------------------------------

// 1. What are arrow functions in TypeScript?

// The arrow functions provide concise sintax for defining functions in TypeScript. They are the way 
// short for the functions notation.
// -----------------------------------------------------------------------------------
//Arrow functions in TypeScript are a concise syntax for defining functions. 
// They are also known as fat arrow functions. They provide a shorthand notation for writing anonymous 
// functions and automatically capture the context of this from the surrounding scope.

// 2. Rewrite the add function from the “Functions in TypeScript” example using arrow function syntax.

const add = (a: number, b: number): number => a + b;

// 3. Explain the advantage of arrow functions when dealing with lexical scoping and callbacks.

// - They are a shorthand notation for writing anonymus functions.
// - Arrow functions provide a more concise syntax for defining functions.
// -----------------------------------------------------------------------------------
// Arrow functions have an advantage when dealing with lexical scoping and callbacks because 
// they don’t create their own this context. They inherit the this value from the surrounding scope, 
// which is often the expected behavior when working with closures or accessing the correct this 
// value inside callbacks. This eliminates the need to use functions like bind or create additional 
// variables to maintain the correct this context.

// 4. Write an arrow function named multiply that takes two parameters num1 and num2, both of type number, and returns their product. Write the arrow function code.

const multiply = (num1: number, num2: number): number => num1 * num2;
