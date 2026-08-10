// program that calculates Body Mass Index (BMI) when given weight and height

let weight = prompt("Enter your weight in kg");
let height = prompt("Enter your height in meters");

let bmi = weight / (height * height);

console.log("Your BMI is " + bmi);