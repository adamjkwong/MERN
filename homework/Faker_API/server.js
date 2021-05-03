const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

// req is shorthand for request
// res is shorthand for response

// const createUser= () => {
//     const newFakeUser = { 
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         phoneNumber: faker.phone_number.phoneNumber(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
//     return newFakeUser;
// };
// const newFakeUser = createUser();

//Using all this sweet Faker stuff - https://github.com/Marak/faker.js/tree/master/lib

class User {
    constructor() { 
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    };
};

let newUser = [
    new User(),
]

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.stateAbbr();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

let newCompany = [
    new Company(),
]

let newUser_Company= [
    new User(),
    new Company(),
]

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    console.log("This should return a new user")
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    console.log("This should return a new company");
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    console.log("This should return both a new user followed directly by a company");
    res.json(newUser_Company);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );