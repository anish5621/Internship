const userResponse = {
    status: "success",
    timestamp: "2026-08-21",
    data: {
        id: 1,
        name: "Anish",
        email: "anish@gmail.com"
    }
};
const productResponse = {
    status: "success",
    timestamp: "2026-08-21",
    data: {
        id: 101,
        name: "Laptop",
        price: 120000
    }
};
const orderResponse = {
    status: "success",
    timestamp: "2026-08-21",
    data: {
        id: 500,
        productId: 101,
        quantity: 2
    }
};
// Display the responses
console.log("User Response:");
console.log(userResponse);
console.log("Product Response:");
console.log(productResponse);
console.log("Order Response:");
console.log(orderResponse);
export {};
