//String literal types allow you to specify the exact value a string can have.
let myFavoritePet: "dog";
myFavoritePet = "dog";
console.log(myFavoritePet);

type Species = "dog" | "cat" | "bird";

interface Pet {
    species: Species;
    name: string;
    eat(): void;
    walk(): void;
    sleep(): void;
}

interface Cat extends Pet {
    species: "cat";
}

interface Dog extends Pet {
    species: "dog";
}

interface Bird extends Pet {
    species: "bird";
    sing(): void;
}

// function buyPet(pet: Species, name: string): Pet;
// function buyPet(pet: "cat", name: string): Cat;
// function buyPet(pet: "dog", name: string): Dog;
// function buyPet(pet: "bird", name: string): Bird;
function buyPet(pet: Species, name: string): Pet {
    if (pet === "cat") {
        return {
            species: "cat",
            name: name,
            eat: function () {
                console.log(`${this.name} eats.`);
            }, walk: function () {
                console.log(`${this.name} walks.`);
            }, sleep: function () {
                console.log(`${this.name} sleeps.`);
            }
        } as Cat;
    } else if (pet === "dog") {
        return {
            species: "dog",
            name: name,
            eat: function () {
                console.log(`${this.name} eats.`);
            }, walk: function () {
                console.log(`${this.name} walks.`);
            }, sleep: function () {
                console.log(`${this.name} sleeps.`);
            }
        } as Dog;
    } else if (pet === "bird") {
        return {
            species: "bird",
            name: name,
            eat: function () {
                console.log(`${this.name} eats.`);
            }, walk: function () {
                console.log(`${this.name} walks.`);
            }, sleep: function () {
                console.log(`${this.name} sleeps.`);
            }, sing: function () {
                console.log(`${this.name} sings.`);
            }
        } as Bird;
    } else {
        throw `Sorry we do not have a ${pet}. Would you like to buy a dog?`;
    }
}


let dog = buyPet("dog", "Bobby");

dog.eat();
dog.sleep();


