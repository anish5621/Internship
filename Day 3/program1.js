// Program that accepts an array of numbers and calculates the sum of all elements
  
    let numbers = prompt("Enter numbers separated by commas:");

    numbers = numbers.split(",");

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + Number(numbers[i]);
    }

    console.log("Sum of all elements = " + sum);
