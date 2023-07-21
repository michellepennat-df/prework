import { addCalc, subtractCalc, multiplyCalc } from "../calculator";

test("adds two numbers correctly", () => {
    expect(addCalc(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
    expect(subtractCalc(5, 3)).toBe(2);
});
test("multiply two numbers correctly", () => {
    expect(multiplyCalc(5, 10)).toBe(50);
});