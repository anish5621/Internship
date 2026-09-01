// Exercise 1 code

function getFirst<T>(items: T[]): T {
    return items[0];
}

function getLast<T>(items: T[]): T {
    return items[items.length - 1];
}

function reverse<T>(items: T[]): T[] {
    return [...items].reverse();
}

function findById<T extends { id: number }>(
    items: T[],
    id: number
): T | undefined {
    return items.find(item => item.id === id);
}


// getFirst
console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<string>(["Anish", "Ram", "Hari"]));


// getLast
console.log(getLast<number>([10, 20, 30]));
console.log(getLast<string>(["Anish", "Ram", "Hari"]));


// reverse
console.log(reverse<number>([1, 2, 3, 4]));
console.log(reverse<string>(["A", "B", "C"]));


// findById
const users = [
    { id: 1, name: "Anish" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Hari" }
];

console.log(findById(users, 2));