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

/* TASK 3 - Series duration of my life */

const seriesDurations = [
    {
        title: "Money heist",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Defiance",
        days: 3,
        hours: 21,
        minutes: 14,
    },
    {
        title: "Breaking bad",
        days: 3,
        hours: 11,
        minutes: 20,
    },
];

const averageLifespan = 80;
const averageLifespanMinutes = averageLifespan * 365 * 24 * 60; /* Convert years to minutes */
let percentageOfLife = 0;
let totalPercentageOfLife = 0;

function logOutSeriesText(seriesDurations) {
    let serieLengthInMinutes = 0;

    for (let i = 0; i < seriesDurations.length; i++) {
        serieLengthInMinutes = (seriesDurations[i].days * 1440) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes;
        percentageOfLife = ((serieLengthInMinutes / averageLifespanMinutes) * 100);
        totalPercentageOfLife += percentageOfLife;
        console.log(seriesDurations[i].title + " took " + percentageOfLife.toFixed(3) + "% of my life.");
    }

    console.log("In total that is " + totalPercentageOfLife.toFixed(3) + "% of my life.");
}

logOutSeriesText(seriesDurations);
/* logOutSeriesText(); // logs out the text found above */

/* =========================================== */


