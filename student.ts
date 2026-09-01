type Student = {
    id: number;
    name: string;
    isEnrolled: boolean;
    grade: number | null;
};

const students: Student[] = [
    {
        id: 1,
        name: "Anish",
        isEnrolled: true,
        grade: 85
    },
    {
        id: 2,
        name: "Manish",
        isEnrolled: true,
        grade: 72
    },
    {
        id: 3,
        name: "Jenish",
        isEnrolled: false,
        grade: null
    },
    {
        id: 4,
        name: "Senish",
        isEnrolled: true,
        grade: 55
    }
];

const grades = students
    .map(student => student.grade)
    .filter((grade): grade is number => grade !== null);

function analyzeGrades(grades: number[]) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = Math.round(Number((total / grades.length)));
    const highest = Math.max(...grades);
    const lowest = Math.min(...grades);
    const passing = grades.filter(grade => grade >= 60).length;

    return {
        total,
        average,
        highest,
        lowest,
        passing
    };
}

const result = analyzeGrades(grades);

console.log(result);

type CourseEnrollment = [string, number, boolean];

const courseEnrollments: CourseEnrollment[] = [
    ["TypeScript", 3, true],
    ["React", 4, false],
    ["Database", 3, true]
];

let schoolName = "Coding Academy";
// TypeScript allows this because it uses type inference.
// It automatically detects that "Coding Academy" is a string,
// so we don't need to explicitly write : string.

let schoolNameType: "Coding Academy" | "Tech Institute" = "Coding Academy";``

console.log("Grades:", grades);
console.log("Grade Analysis:", result);
console.log("Courses:", courseEnrollments);
console.log("School:", schoolName);
console.log("School Type:", schoolNameType); 

export{};