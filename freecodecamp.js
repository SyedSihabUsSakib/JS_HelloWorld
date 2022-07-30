class Circle {
    
    constructor(value) {
      this.radius = value;
    }
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
     myfunc() {
      const  fn =()=>{
        console.log(this.radius);
      }
      
      fn()
     }
    
    
    };
  //dsjkdsf
  
  let circle = new Circle(10);
  circle.myfunc(); // 314.1592653589793

  console.dir(circle);