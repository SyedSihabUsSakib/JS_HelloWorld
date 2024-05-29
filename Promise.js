//Will process in parallel just like thread
let p1 = new Promise((resolve, reject) => {
  console.log("giving you first promise");
  setTimeout(() => {
    console.log("Hello from p1");
    resolve(true);
  }, 4000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Giving you second promise");
  setTimeout(() => {
    console.log("Cant say hello");
    reject(new Error("I am giving you an error"));
  }, 4000);
});

p1.then((val) => {
  console.log(val);
});

p2.catch((err) => {
  console.log("Some error occured in P2 " + err);
});
