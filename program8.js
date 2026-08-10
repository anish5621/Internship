//program that prints the multiplication table of a given number.

let number = prompt("Enter a number");
for (let i = 1; i <= 10; i++) {
    console.log(number + " × " + i + " = " + (number * i));
}