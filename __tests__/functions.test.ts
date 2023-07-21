import { capitalize, multiply, reverseStringTest, calculateAverageTest } from "../Testing/functions";

test("capitalize function capitalizes the first letter of a word", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("multiply function multiplies two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
});

test("multiply function multiplies two numbers correctly", () => {
    expect(reverseStringTest("hola")).toBe("aloh");
});

test("multiply function multiplies two numbers correctly", () => {
    expect(calculateAverageTest([1, 2, 3, 4])).toBe(2.5);
});

// Add more test cases for the other functions