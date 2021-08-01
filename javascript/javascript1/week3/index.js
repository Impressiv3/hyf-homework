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

/* TASK 2 - When will we be there?? */

const travelInformation = {
    speed: 50,  /* KM/H */
    destinationDistance: 432, /* KM */
};

const travelTime = timeTillDestination(travelInformation);

function timeTillDestination() {
    let result = 0;
    result = (travelInformation.destinationDistance / travelInformation.speed) * 60;
    return (Math.floor(result / 60) + " hours and " + Math.floor(result % 60) + " minutes.");
}

console.log(travelTime)

/* =========================================== */