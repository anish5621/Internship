    // Program that reverses the order of elements in an array and prints the result.
    
    let numbers = prompt("Enter numbers separated by commas:");

    numbers = numbers.split(",");

    let reversed = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }

    console.log("Reversed array = " + reversed);