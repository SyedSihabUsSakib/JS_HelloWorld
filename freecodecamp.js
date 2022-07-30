class Circle {
    #radius;
    constructor(value) {
      this.#radius = value;
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  }
  //dsjkdsf
  
  let circle = new Circle(10);
  console.log(circle.area); // 314.1592653589793