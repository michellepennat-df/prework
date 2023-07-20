class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("The animal makes a sound.");
    };
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound(): void {
        console.log("The dog barks.");

    }
}

const dog = new Dog("Buddy", "Labrador Retriever");
dog.makeSound();