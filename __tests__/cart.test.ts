import { calculateTotal } from "../Testing/shopping-cart";

test("calculates the total price correctly", () => {
    const cartItems = [10, 15, 20];
    const totalPrice = calculateTotal(cartItems);
    expect(totalPrice).toBe(45);
});