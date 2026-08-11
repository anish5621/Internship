 // program that removes duplicate values from an array and prints the unique elements.
 
    let numbers = prompt("Enter numbers separated by commas:");

    numbers = numbers.split(",");

    let unique = [];

    for (let i = 0; i < numbers.length; i++) {

        if (!unique.includes(numbers[i])) {
            unique.push(numbers[i]);
        }

    }

    console.log("Unique elements = " + unique);