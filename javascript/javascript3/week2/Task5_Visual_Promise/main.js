const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const boxes = [redBox, blueBox, greenBox];
const redTarget = { color: "red", x: 20, y: 300 };
const blueTarget = { color: "blue", x: 400, y: 300 };
const greenTarget = { color: "green", x: 400, y: 20 };
const redPosition = {
  x: `${redTarget.x - parseInt(redBox.style.left)}`,
  y: `${redTarget.y - parseInt(redBox.style.top)}`,
};
const bluePosition = {
  x: `${blueTarget.x - parseInt(blueBox.style.left)}`,
  y: `${blueTarget.y - parseInt(blueBox.style.top)}`,
};
const greenPosition = {
  x: `${greenTarget.x - parseInt(greenBox.style.left)}`,
  y: `${greenTarget.y - parseInt(greenBox.style.top)}`,
};

async function translateOneByOne() {
  await moveElement(redBox, redPosition).then(() => {
    console.log("Red has been moved.");
  });

  await moveElement(blueBox, bluePosition).then(() => {
    console.log("Blue has been moved.");
  });

  await moveElement(greenBox, greenPosition).then(() => {
    console.log("Green has been moved.");
  });
}

/* translateOneByOne(); */

function translateAllAtOnce() {
  Promise.all([
    moveElement(redBox, redPosition),
    moveElement(blueBox, bluePosition),
    moveElement(greenBox, greenPosition),
  ])
    .then(() => {
      console.log("All circles/boxes moved.");
    })
    .catch((error) => {
      console.log(error);
    });
}

translateAllAtOnce();
