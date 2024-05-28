// let saySomething = () => console.log("hello"); //by using arrow function

setTimeout(saySomething, 3000);
function saySomething() {
  console.log("Hello");
}

let sayAgain = (name) => console.log(name);
setTimeout(() => sayAgain("Sihab"), 2000);

//Closure --> a function that captures the lexical scope in which it was defined, allowing it to retain access to its variables even when called outside that scope.

let createCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

let counter = createCounter();
console.log(counter());
console.log(counter());

//setinterval
let clock = () => {
  let date = new Date();
  console.log(
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  );
};
setInterval(clock, 1000);
