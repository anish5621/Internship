// program that assigns a grade (A, B, C, etc.) based on a student’s score

let score = prompt("Enter student score");

if (score >= 80) {
    console.log("Grade A");
}
else if (score >= 60) {
    console.log("Grade B");
}
else if (score >= 40) {
    console.log("Grade C");
}
else {
    console.log("Grade F");
}