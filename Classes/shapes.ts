class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    getArea(): number {
        throw new Error('This method is abstract');
    }
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    getArea(): number {
        const area: number = Math.PI * this.radius ^ 2;
        return area;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        const area: number = this.width * this.height;
        return area;
    }
}

const circle = new Circle("red", 5);
const areaCircle = circle.getArea();
console.log("The color of the circle is: ", circle.color, "and area is: ", areaCircle)

const rectangle = new Rectangle("blue", 4, 6);
const areaRectangle = rectangle.getArea();
console.log("The color of the circle is: ", rectangle.color, "and area is: ", areaRectangle)