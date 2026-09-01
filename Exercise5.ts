export {};
// Exercise 5: Typed API Models Using Generics

// User model
interface User {
  id: number;
  name: string;
  email: string;
}

// Product model
interface Product {
  id: number;
  name: string;
  price: number;
}

// Order model
interface Order {
  id: number;
  productId: number;
  quantity: number;
}

// Generic API response
interface ApiResponse<T> {
  status: string;
  timestamp: string;
  data: T;
}

// User API response
type UserResponse = ApiResponse<User>;

const userResponse: UserResponse = {
  status: "success",
  timestamp: "2026-08-21",
  data: {
    id: 1,
    name: "Anish",
    email: "anish@gmail.com"
  }
};

// Product API response
type ProductResponse = ApiResponse<Product>;

const productResponse: ProductResponse = {
  status: "success",
  timestamp: "2026-08-21",
  data: {
    id: 101,
    name: "Laptop",
    price: 120000
  }
};

// Order API response
type OrderResponse = ApiResponse<Order>;

const orderResponse: OrderResponse = {
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