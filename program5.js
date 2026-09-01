//program that filters out only the even numbers from an array and prints them.

let numbers = prompt("Enter numbers separated by commas:");

numbers = numbers.split(",");

numbers = numbers.map(Number);

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even numbers:", evenNumbers);