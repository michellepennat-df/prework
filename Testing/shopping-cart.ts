export function calculateTotal(items: number[]): number {
    // Refactored code
    return items.reduce((total, item) => total + item, 0);
}