    //Program that finds and prints the largest number in a given array.
    
    let numbers = prompt("Enter numbers separated by commas:");

    numbers = numbers.split(",");

    let largest = Number(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {

        if (Number(numbers[i]) > largest) {
            largest = Number(numbers[i]);
        }

    }

    console.log("Largest number = " + largest);
