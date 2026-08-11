// program that accepts a list of expenses and prints the total, average, and highest expense.

let expenses = prompt("Enter expenses separated by commas:");

expenses = expenses.split(",");

let total = 0;
let highest = Number(expenses[0]);

for (let i = 0; i < expenses.length; i++) {

    let expense = Number(expenses[i]);

    total = total + expense;

    if (expense > highest) {
        highest = expense;
    }
}

let average = total / expenses.length;

console.log("Total Expense = Rs. " + total);
console.log("Average Expense = Rs. " + average);
console.log("Highest Expense = Rs. " + highest);