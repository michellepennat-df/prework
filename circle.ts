class CircleTheme {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    get area() {
        return this.calculateArea();
    }

    calculateArea(): number {
        const area: number = Math.PI * this.radius ^ 2;
        return area;
    }
}

const circle1 = new CircleTheme(5);
console.log("Area circulo 1: " + circle1.area);

// or

const circle4 = new CircleTheme(5);
const area1 = circle4.calculateArea();
console.log("The area of the circle is:", area1);

