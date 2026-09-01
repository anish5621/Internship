//exercise 2

interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Order {
    id: number;
    product: string;
    quantity: number;
}

const userResponse: ApiResponse<User> = {
    status: 200,
    message: "User found",
    data: {
        id: 1,
        name: "Anish",
        email: "anish@gmail.com"
    }
};

const productResponse: ApiResponse<Product> = {
    status: 200,
    message: "Product found",
    data: {
        id: 1,
        name: "Laptop",
        price: 100000
    }
};

const orderResponse: ApiResponse<Order> = {
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