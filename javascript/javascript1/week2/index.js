/*________________________________________*/
/*  HYF HOMEWORK - JAVASCRIPT 1 - WEEK 2  */
/*________________________________________*/

/* TASK 1 - Flight booking fullname function */

function getFullname(firstname, surname, useFormalName) {
    if (!firstname || !surname) throw new Error('Whoopsy, Firstname or Surename is missing.');
    return ((useFormalName && useFormalName === true ? `${"Lord " + firstname + " " + surname}` : `${firstname + " " + surname}`));
}

getFullname("Benjamin", "Hughes", true);


const fullname1 = getFullname("Balint", "Szabad", true);
console.log(fullname1);
const fullname2 = getFullname("Donald", "Trump", false);
console.log(fullname2);

/* ANSWER for the QUESTION : But what if the person is a woman? Describe how you would fix the getFullname so it also works for women */
/* 1. I'd create another param something like isMale.
   2. I'd create a string variable called formalName.
   3. Depending on the value of the isMale boolean I would change the formaleName's string value from "Lord"  TO  "Lady".

    It would look something like this:

    function getFullname(firstname, surname, useFormalName, isMale) {
        let formaleName = "Lord";  IT WOULD BE THE DEFAULT VALUE that I initialize the variable with.
        if (isMale && isMale === false){               IF isMale boolean is given and it's value is false,change formalName's value to "Lady".
        formalName = "Lady";
        }

        if (!firstname || !surname) throw new Error('Whoopsy, Firstname or Surename is missing.');
        return ((useFormalName && useFormalName === true ? `${ formalName + " " + firstname + " " + surname}` : `${firstname + " " + surname}`));
}

getFullname("Benjamin", "Hughes", true, false); -> would return: Lady Benjamin Hughes as getFullname's value.

/*================================================================*/



/* TASK 2 - Event application */

function getEventWeekday(daysLeftTillEvent) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturay"];
    const currentDate = new Date();
    const result = (currentDate.getDay() + daysLeftTillEvent) % 7;
    console.log("The event will take place on " + `${daysOfWeek[result]}` + ".");
}

getEventWeekday(8);

/*================================================================*/


/* TASK 3 - Weather wear */

const clothing = {
    hot: ["Swimwear", "Flip-Flops", "Sunglasses"],
    cold: ["Boots", "Jacket", "Scarf"]
}

function suggestClothingBasedOnWeather(currentTemperature) {
    if (currentTemperature <= 20) {
        console.log("The weather is COLD, you should be wearing: " + clothing.cold.join(" ") + ".");
    } else {
        console.log("The weather is HOT, you should be wearing: " + clothing.hot.join(" ") + ".");
    }
}

suggestClothingBasedOnWeather(22);
suggestClothingBasedOnWeather(12);


/*================================================================*/


/* TASK 4 - Student manager */

const class07Students = [];
function addStudentToClass(studentName) {
    if (!studentName) return;                /* If no student name is given return */
    if (studentName == "queen") {            /* If student is queen add it to array */
        class07Students.push(studentName);
    } else {
        if (class07Students.length >= 6) {           /* If there are more than 6 students log msg */
            console.log("Cannot add more than 6 students to class 07.");
        }
        if (class07Students.includes(studentName)) {          /* If  student is already in the array log msg*/
            console.log("Student: " + studentName + " is already in the class");
        } else {
            class07Students.push(studentName);    /* add student to array */
        }
    }
}

function getNumberOfStudents() {
    console.log(class07Students.length);
}

/* TEST CASE */
addStudentToClass("First Student");
addStudentToClass("Second Student");
addStudentToClass("Third Student");
addStudentToClass("Fourth Student");
addStudentToClass("Fifth Student");
addStudentToClass("Sixth Student");
addStudentToClass("First Student");
addStudentToClass("queen");

getNumberOfStudents();
console.dir(class07Students);


/*================================================================*/

/* TASK 4 - Candy helper */

const candyPrices = {
    Sweet: 0.5,
    Chocolate: 0.7,
    Toffee: 1.1,
    Chewing_gum: 0.03
}

let boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {

    if (canBuyMoreCandy) {
        boughtCandyPrices.push(candyPrices[candyType] * weight);
    } else {
        return;
    }

    console.log(boughtCandyPrices);
}

addCandy("Sweet", 2);

addCandy("Toffee", 10);

addCandy("Chocolate", 5);

function canBuyMoreCandy() {
    let total = 0;
    boughtCandyPrices.forEach(element => (total = total + element));

    if (total > amountToSpend) {
        console.log("Enough candy for you!");
        return false;
    }
    else {
        console.log("You can buy more, so please do!");
        return true;
    }
}

canBuyMoreCandy();



/*================================================================*/
