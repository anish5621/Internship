const updateUser = {
    email: "anish@gmail.com"
};
console.log("Updated User:", updateUser);
const userPreview = {
    id: 1,
    name: "Anish"
};
console.log("User Preview:", userPreview);
const publicUser = {
    id: 1,
    name: "Anish",
    email: "anish@gmail.com"
};
console.log("Public User:", publicUser);
const readonlyUser = {
    id: 1,
    name: "Anish",
    email: "anish@gmail.com",
    password: "12345"
};
console.log("Readonly User:", readonlyUser);
const userDatabase = {
    1: {
        id: 1,
        name: "Anish",
        email: "anish@gmail.com",
        password: "12345"
    },
    2: {
        id: 2,
        name: "Ram",
        email: "ram@gmail.com",
        password: "67890"
    }
};
console.log("User Database:", userDatabase);
export {};
