/* bind */
// const person={
//     name: "sihab",
//     walk(){
//         console.log(this);
//     }
// };

// person.walk();
// // const walk=person.walk;//evabe likhle kaj korto na karon walk() tokhon windows object k indicate korto this function diye/undefined hoye thakto. tai person k bind kore disi walk er sathe.ekhon walk() always person k indicate korbe
// const walk=person.walk.bind(person);
// walk();

/*Arrow Function */

// const arr=[
//     {member:1,isActive:true},
//     {member:2,isActive:true},
//     {member:3,isActive:false}
// ];

// const active=arr.filter(job=>job.isActive);//job ta arr er object jeta protita member object k dhortese array er
// console.log(active);

//2
// "use strict"
// const person={
//     talk(){
//         setTimeout(function(){
//             console.log("this",this);//member function er vitor function jnno "this" indicate korbe windows k, object k na indicate kore. solve niche korlam
//         })
       
//     }
// };

// person.talk();

// /*solve 1*/

// const person={
     
//     talk(){
//         var self=this;
//         setTimeout(function(){
//             console.log(self);
//         },1000)
       
//     }
// };

// person.talk();

/*solve 2-->arrow function*/

// const person={
     
//     talk(){
       
//         setTimeout(()=> console.log(this),1000)
       
//     }
// };

// person.talk();

/*Array Map */

// const arr=[
//     "red",
//     "green",
//     "blue"
// ];

// const items=arr.map(color=>`<li>${color}</li>`);
// console.log(items);

/*class*/

//template for bulding a class is given as object

// const person={
//     name: "sihab",
//     walk(){
//         console.log("can walk");
//     }
// };
// person.walk();

// class Person{ //class er nam er proti word er first letter gulo Capital letter likhte hoe
//     constructor(name){
//         this.name=name;
//     }
//     walk(){
//         console.log("can walk");
//     }
// }

// const man=new Person("sihab");
// man.walk();

/*Inheritance*/
// class Person{ 
//     constructor(name){
//         this.name=name;
//     }
//     walk(){
//         console.log("can walk");
//     }
// }

// class Teacher extends Person{
//     constructor(name,degree){
//         super(name);
//         this.degree=degree;
//     }
//     teach(){
//         console.log("can teach");
//     }
// }

// const pteacher=new Teacher("sihab","BSc");
// pteacher.walk();
// console.log(pteacher.name);
// pteacher.teach();
