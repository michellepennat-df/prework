function calculateSum(num1: number, num2: number): number {
    return num1 + num2;
}

console.log("-SUMA-----------------------------------------------------------------------------------");
console.log("Suma 1: " + calculateSum(4, 5));
console.log("Suma 2: " + calculateSum(1, 3));
console.log("Suma 3: " + calculateSum(8, -5));

function isEven(num: number): boolean {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log("-PARES-----------------------------------------------------------------------------------");
console.log("¿Es par?: " + isEven(4));
console.log("¿Es par?: " + isEven(1));
console.log("¿Es par?: " + isEven(8));

function reverseString(str: string): string {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const reverseStr = reverseArray.join("")
    return reverseStr;
}

console.log("-REVERSO-----------------------------------------------------------------------------------");
console.log("Su reverso es: " + reverseString("hola"));
console.log("Su reverso es: " + reverseString("Ana"));
console.log("Su reverso es: " + reverseString("Carola"));

const calculateAverage = (nums: number[]): number => {
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    const promedio: number = sum / nums.length;
    return promedio;
}

console.log("-PROMEDIO-----------------------------------------------------------------------------------");
console.log("El promedio es: " + calculateAverage([1, 2, 3, 4]));
console.log("El promedio es: " + calculateAverage([5, 8, 10, 15, 20]));
console.log("El promedio es: " + calculateAverage([3, 4, 1, 9, 50]));

type MathOperation = (num1: number, num2: number) => number;
const multiply: MathOperation = (a: number, b: number): number => a * b;

console.log("-MULTIPLICACIÓN-----------------------------------------------------------------------------------");
console.log("El producto es: " + multiply(2, 2));
console.log("El producto es: " + multiply(10, 10));
console.log("El producto es: " + multiply(20, 2));
