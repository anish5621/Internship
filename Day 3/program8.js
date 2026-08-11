//Program that calculates an employee’s net salary after adding allowances and deducting taxes

let name = prompt("Enter employee name:");

let basicSalary = Number(prompt("Enter basic salary:"));

let allowance = Number(prompt("Enter allowance:"));

let taxPercentage = Number(prompt("Enter tax percentage:"));

let grossSalary = basicSalary + allowance;

let tax = (grossSalary * taxPercentage) / 100;

let netSalary = grossSalary - tax;

console.log("Employee Name: " + name );
console.log("Basic Salary: Rs. " + basicSalary);
console.log("Allowance: Rs. " + allowance);
console.log("Gross Salary: Rs. " + grossSalary);
console.log("Tax: Rs. " + tax);
console.log("Net Salary: Rs. " + netSalary);