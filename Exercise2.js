export {};

// Exercise 1 code

"use strict";
const userResponse = {
    status: 200,
    message: "User found",
    data: {
        id: 1,
        name: "Anish",
        email: "anish@gmail.com"
    }
};
const productResponse = {
    status: 200,
    message: "Product found",
    data: {
        id: 1,
        name: "Laptop",
        price: 100000
    }
};
const orderResponse = {
    status: 200,
    message: "Order found",
    data: {
        id: 1,
        product: "Laptop",
        quantity: 2
    }
};
console.log(userResponse);
console.log(productResponse);
console.log(orderResponse);
