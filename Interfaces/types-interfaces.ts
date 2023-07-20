type Person = {
    name: string;
    age: number;
    email: string;
}

let person: Person = { name: "Michelle", age: 25, email: "michelle.penna.ext@digitalfemsa.com" }

interface IBook {
    title: string;
    author: string;
    pages: number;
}

const books: IBook[] = [
    {
        title: "Hábitos atómicos",
        author: "James Clear",
        pages: 326,
    },
    {
        title: "Crepúsculo",
        author: "Alguien",
        pages: 100,
    },
    {
        title: "Cómo ganar amigos",
        author: "Dale Carnegie",
        pages: 246,
    },
]

function displayBookInfo(book: IBook) {
    console.log("Title: ", book.title, "- Autor: ", book.author, "-", book.pages, "pages");
}

books.map(book => displayBookInfo(book));

