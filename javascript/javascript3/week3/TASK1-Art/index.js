const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle * Math.PI, 2 * Math.PI, this.fillColor);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
    console.log(this.x, this.y);
  };
}

/////////////////////////////////////////////////////////////////
// Commented out this part where I just create static circles

/* const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#FE7F9C");
c1.draw();
const c2 = new Circle(10, 30, 30, 0, 2 * Math.PI, "#FE7F9C");
c2.draw();
const c3 = new Circle(110, 40, 20, 0, 2 * Math.PI, "#000000");
c3.draw(); */

function drawRandomCircle() {
  const startAngle = 0;
  const endAngle = 2 * Math.PI;
  const randomHexColor = (() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  })();

  const randomXPosition = (() => {
    const min = 0;
    const max = 150;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  })();

  const randomYPosition = (() => {
    const min = 0;
    const max = 150;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  })();

  const randomRadius = (() => {
    const min = 10;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  })();

  return new Circle(
    randomXPosition,
    randomYPosition,
    randomRadius,
    startAngle,
    endAngle,
    randomHexColor,
  ).draw();
}

// Drawing random circle and drawing circles at given intervals.
drawRandomCircle();

function drawCirclesInterval(interval) {
  const startDraw = () => {
    setInterval(function () {
      drawRandomCircle();
    }, interval);
  };
  startDraw();
}

drawCirclesInterval(100);
