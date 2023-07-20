const messageIntro: string = "Hello, TypeScript!";
console.log(messageIntro);

const personAge: number = 20;
const productPrice: number = 20000;
const bookTitles: string[] = [
    "Hábitos atómicos",
    "Crepúsculo",
    "Cómo ganar amigos",
];
const authStatus: boolean = true;
const profileInformation: object = {
    personName: "Michelle Penna",
    age: 25,
    email: "michelle.penna.ext@digitalfemsa.com",
};
const nullVariable: null = null;
const undefinedVarible: undefined = undefined;

let price: number = 19.99;
let quantity: number = 3;
let productName: string = "Laptop";
let isAvailable: boolean = true;

type MyString = string;
type Point = { x: number; y: number };

type MyType = string | number;

type TPersonIntro = { name: string } & { age: number };

type ReadonlyPoint = Readonly<Point>;
type OptionalPerson = Partial<TPersonIntro>;

// Creating a custom type alias for representing a user’s ID:
// Defining a union type for a variable that can store either a string or an array of numbers:
// Creating an intersection type for combining a person’s name and their address:
// Defining a mapped type to create a read-only version of an existing object type:
// Creating a type alias for a function that takes a string argument and returns a number:

type UserId = number;
type UserID = string;
type UnionType = string | number[];
type InserctionPerson = { name: string } & { address: number };
type MappedReadonlyPoint = Readonly<TPersonIntro>;
type returnNumber = (arg: string) => number;
