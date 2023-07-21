export function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function reverseStringTest(str: string): string {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const reverseStr = reverseArray.join("")
    return reverseStr;
}

export const calculateAverageTest = (nums: number[]): number => {
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    const promedio: number = sum / nums.length;
    return promedio;
}

// Add more functions as needed