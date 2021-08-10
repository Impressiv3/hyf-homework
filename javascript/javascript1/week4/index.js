let message = ""; // message that we pass to displayMessage function to display as console.log
const commands = [
  // commands array that contains objects with keywords to look for. If min. 2 keywords match we execute the command that was found at that index
  {
    keywords: ["hello", "name"],
    functionToExecute: function (formatedCommand) {
      const wordsToRemove = ["hello", "my", "name", "is"];
      let filteredArray = removeFromArray(wordsToRemove, formatedCommand);

      !userData.userName // If there is no username saved yet...
        ? ((userData.userName = firstLetterToUpperCase(filteredArray)),
          (message = `Nice to meet you ${userData.userName}.`))
        : (message = `Stop spamming the same command ${userData.userName}.`); // if we already have a userName saved give different greeting message
    },
  },
  {
    keywords: ["what", "name"],
    functionToExecute: function () {
      message = `Your name is ${userData.userName}.`;
    },
  },
  {
    keywords: ["add", "todo"],
    functionToExecute: function (formatedCommand) {
      const wordsToRemove = ["add", "to", "my", "todo"];
      let filteredArray = removeFromArray(wordsToRemove, formatedCommand);
      filteredArray = arrayToString(filteredArray);
      userData.toDoList.push(filteredArray);
      message = `${filteredArray} has been added to your todo list.`;
    },
  },
  {
    keywords: ["remove", "todo"],
    functionToExecute: function (formatedCommand) {
      const wordsToRemove = ["remove", "from", "my", "todo"];
      let filteredArray = removeFromArray(wordsToRemove, formatedCommand);

      userData.toDoList.splice(userData.toDoList.indexOf(filteredArray), 1);
      message = `${filteredArray} has been removed from your todo list.`;
    },
  },
  {
    keywords: ["what", "todo"],
    functionToExecute: function () {
      message = `You have ${userData.toDoList.length} thing(s) to do: ${userData.toDoList}.`;
    },
  },
  {
    keywords: ["what", "today"],
    functionToExecute: function () {
      const date = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      message = `Today is ${date.getDate()}.th of ${
        months[date.getMonth()]
      } ${date.getFullYear()}.`;
    },
  },
  {
    keywords: ["what", "+"],
    functionToExecute: function (formatedCommand) {
      const wordsToRemove = ["what", "is"];
      let filteredArray = removeFromArray(wordsToRemove, formatedCommand);
      let result = parseInt(filteredArray[0]) + parseInt(filteredArray[2]);
      message = `The answer for you question, what ${arrayToString(
        filteredArray
      )} is ${result}.`;
    },
  },
  {
    keywords: ["what", "-"],
    functionToExecute: function (formatedCommand) {
      const wordsToRemove = ["what", "is"];
      let filteredArray = removeFromArray(wordsToRemove, formatedCommand);
      let result = parseInt(filteredArray[0]) - parseInt(filteredArray[2]);
      message = `The answer for you question, what ${arrayToString(
        filteredArray
      )} is ${result}.`;
    },
  },
  {
    keywords: ["what", "*"],
    functionToExecute: function (formatedCommand) {
      const wordsToRemove = ["what", "is"];
      let filteredArray = removeFromArray(wordsToRemove, formatedCommand);
      let result = parseInt(filteredArray[0]) * parseInt(filteredArray[2]);
      message = `The answer for you question, what ${arrayToString(
        filteredArray
      )} is ${result}.`;
    },
  },
  {
    keywords: ["what", "/"],
    functionToExecute: function (formatedCommand) {
      const wordsToRemove = ["what", "is"];
      let filteredArray = removeFromArray(wordsToRemove, formatedCommand);
      let result = parseInt(filteredArray[0]) / parseInt(filteredArray[2]);
      message = `The answer for you question, what ${arrayToString(
        filteredArray
      )} is ${result}.`;
    },
  },
  {
    keywords: ["set", "timer"],
    functionToExecute: function (formatedCommand) {
      const wordsToRemove = ["set", "a", "timer", "for", "minutes"];
      let filteredArray = removeFromArray(wordsToRemove, formatedCommand);
      message = `The timer is set now to ${filteredArray} minutes.`;
      timer(filteredArray);
    },
  },
];

const userData = {
  userName: "",
  toDoList: [],
};

// UTILITY FUNCTIONS //

function formatCommand(commandToFormat) {
  return commandToFormat
    .replace(/[`~!?@#$%^&()_|;:'",.<>\{\}\[\]\\]/gi, "") // Remove all special characters except: + - * / , =
    .toLowerCase() // Make it all lowercase
    .split(" "); // Split it into an array
}

function executeFormatedCommand(formatedCommand) {
  for (let i = 0; i < commands.length; i++) {
    if (
      commands[i].keywords.every((keyword) => formatedCommand.includes(keyword))
    ) {
      commands[i].functionToExecute(formatedCommand);
      break;
    }
  }
}

function removeFromArray(wordsToRemove, arrayToRemoveFrom) {
  return arrayToRemoveFrom.filter(
    (element) => !wordsToRemove.includes(element)
  );
}

function firstLetterToUpperCase(capitalizeMyFirstLetter) {
  if (typeof capitalizeMyFirstLetter === "object") {
    return (
      capitalizeMyFirstLetter.toString().charAt(0).toUpperCase() +
      capitalizeMyFirstLetter.toString().slice(1)
    );
  } else {
    return (
      capitalizeMyFirstLetter.charAt(0).toUpperCase() +
      capitalizeMyFirstLetter.slice(1)
    );
  }
}

function arrayToString(toJoinTogether) {
  return toJoinTogether.join(" ");
}

function timer(minutesToCountDownFrom) {
  setTimeout(function () {
    alert("Timer done!");
  }, minutesToCountDownFrom * 60 * 1000);
}

function displayMessage(message) {
  console.log(`%c ${message}`, "color: blue; font-size: 22px"); // Styled console.log
}

function getReply(command) {
  !command // check if there is a command and it's not an empty string
    ? console.log("There was no command to execute!") // if there is no command/string is empty, throw error
    : executeFormatedCommand(formatCommand(command)); // if there is a command try to execute it
  displayMessage(message);
}

getReply("Hello my name is Benjamin");
getReply("Hello my name is Benjamin");
getReply("What is my name?");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("Remove fishing from my todo");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("What is 3 + 3 ?");
getReply("What is 6 - 3 ?");
getReply("What is 5 * 10 ?");
getReply("What is 16 / 4 ?");
getReply("Set a timer for 1 minutes");
