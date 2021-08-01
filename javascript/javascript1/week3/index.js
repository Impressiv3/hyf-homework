/* HYF - HOMEWORK - JS1 - WEEK 3*/

/* TASK 1 - Item array removal */

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

const nameToRemove = "Ahmad";
/* Find the index of nameToRemove, remove 1 element at index of nameToRemove */
names.splice(names.indexOf(nameToRemove), 1);

console.table(names);

/* =========================================== */
