const messageTypes: string = "Hola";
const countTypes = 42;

function multiplyTypes(a: number, b: number): number {
    return a * b;
}

type TPoint = {
    x: number;
    y: number;
};

type TPersonTheme = {
    name: string;
    age: number;
}

let personTheme: TPersonTheme = { name: "Michelle", age: 25 }

interface IShape {
    color: string;
    getArea(): number;
}

interface IProduct {
    id: number;
    name: string;
    price: number;
}

function calculateTotal(products: IProduct[]): number {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
}