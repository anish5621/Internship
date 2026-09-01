// program that stores student names and marks, calculates their percentage, and displays whether they passed or failed.
   
   let students = [
        ["Anish", 75],
        ["Ram", 35],
        ["Sita", 82],
        ["Hari", 45]
    ];

    for (let i = 0; i < students.length; i++) {

        let name = students[i][0];
        let marks = students[i][1];

        let percentage = (marks / 100) * 100;

        let result;

        if (percentage >= 40) {
            result = "Pass";
        } else {
            result = "Fail";
        }

        console.log(
            "Name: " + name +
            "<br>Marks: " + marks +
            "<br>Percentage: " + percentage + "%" +
            "<br>Result: " + result +
            "<br><br>"
        );
    }