"use strict";
function getFirst(items) {
    return items[0];
}
function getLast(items) {
    return items[items.length - 1];
}
function reverse(items) {
    return [...items].reverse();
}
function findById(items, id) {
    return items.find(item => item.id === id);
}
// getFirst
console.log(getFirst([10, 20, 30]));
console.log(getFirst(["Anish", "Ram", "Hari"]));
// getLast
console.log(getLast([10, 20, 30]));
console.log(getLast(["Anish", "Ram", "Hari"]));
// reverse
console.log(reverse([1, 2, 3, 4]));
console.log(reverse(["A", "B", "C"]));
// findById
const users = [
    { id: 1, name: "Anish" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Hari" }
];
console.log(findById(users, 2));
