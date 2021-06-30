/*________________________________________*/
/*  HYF HOMEWORK - JAVASCRIPT 1 - WEEK 2  */
/*________________________________________*/

/* TASK 1 - Flight booking fullname function */

function getFullname(firstname, surname, useFormalName) {
    if (!firstname || !surname) throw new Error('Whoopsy, Firstname or Surename is missing.');
    return ((useFormalName && useFormalName === true ? `${"Lord " + firstname + " " + surname}` : `${firstname + " " + surname}`));
}

getFullname("Benjamin", "Hughes", true);
console.log(getFullname);

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
    let currentDate = new Date();
    let result = currentDate.getDay() + (daysLeftTillEvent % 7);

    console.log("The event will take place on " + `${daysOfWeek[result]}` + ".");
}

getEventWeekday(9);

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



/*================================================================*/
