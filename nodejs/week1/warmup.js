console.log(" inside warmup file ");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  getCircumference() {
    return this.radius * 2 * 3.14;
  }

  getArea() {
    return this.radius * this.radius * 3.14;
  }
}

const circle1 = new Circle(10);
const circle2 = new Circle(20);
const circle3 = new Circle(30);

console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());

console.log(circle2.getDiameter());
console.log(circle2.getCircumference());
console.log(circle2.getArea());

console.log(circle3.getDiameter());
console.log(circle3.getCircumference());
console.log(circle3.getArea());
