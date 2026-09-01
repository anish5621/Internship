//program that accepts a list of expenses and prints the total, average, and highest expense.

let products = [
    ["Laptop", "Electronics", 80000],
    ["Mobile", "Electronics", 30000],
    ["T-Shirt", "Clothing", 1500],
    ["Jeans", "Clothing", 2500],
    ["Mouse", "Electronics", 1000]
];

let category = prompt("Enter category:");

for (let i = 0; i < products.length; i++) {

    if (products[i][1].toLowerCase() === category.toLowerCase()) {

        console.log(
            "Product: " + products[i][0] +
            ", Category: " + products[i][1] +
            ", Price: Rs. " + products[i][2]
        );

    }
}