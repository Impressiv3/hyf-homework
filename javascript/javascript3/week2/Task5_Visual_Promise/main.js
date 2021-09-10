const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const boxes = [redBox, blueBox, greenBox];

async function translateOneByOne() {
  boxes.forEach((box, index) => {
      
    console.log(`${index} : ${box}`);
  });
}

translateOneByOne();
