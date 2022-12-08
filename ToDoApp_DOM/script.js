// console.log(document.all);

// for(let element of document.all)
// {
//     console.log(element);
// }

document.title="Task Manager with DOM";
// console.log(typeof(document));
// console.log(document.head);

// let el=document.images;
// for(let element of el)
// {
//     console.log(element);
// }


// Iterable

// const arr = ['hi','hello','all'];
// // console.dir(arr);

// let it=arr[Symbol.iterator]();
// console.log(it);
// // onsole.log(it.next());
// it.next()
// it.next()
// console.log(it.next());


// const obj={
//     robin: 12,
//     sihab: "ninety"
// };
// // for(let element of obj)
// // {
// //     console.log(element);
// // }

// console.dir(obj);

// Traversing DOm

// let obj = document.getElementById("header");
// console.log(obj);
// console.log(typeof(obj));

// const val=obj.textContent;
// console.log(val);
// const val1=obj.innerText;
// console.log(val1);
// const htmlVal = obj.innerHTML;
// console.log(htmlVal);
// obj.style.fontSize = "50px";
// obj.style.color = "red";

let classObj = document.getElementsByClassName("hello");
// console.log(classObj);

for(let element of classObj)
{
    // console.log(5);
    // console.log("element:" ,element);
    // element.style.color ="red";
}

// let val = document.getElementById("list").getElementsByClassName("hello");
// console.log(val);

// const obj = document.getElementsByTagName("h1");
// console.log(obj);

// const obj = document.querySelector(".hello:nth-child(2)");
// obj.style.color = "red";

/* Traversing DOM Hierarchy */

// const obj = document.querySelector(".hello");
// console.log(obj.parentElement);
// console.log(obj.children);
// console.log(obj.nextElementSibling);

/*Create/Change*/

// let dabba = document.createElement('div');
// dabba.setAttribute('id','d_id');
// const father = document.querySelector('.incomplete');
// // console.log(father);
// const ch = father.querySelector('h2');
// // console.log(ch);
// father.insertBefore(dabba,ch);
// // father.append(dabba,"IloveMe")
// father.appendChild(dabba)

/*Event Listener*/
// const formElement = document.querySelector('form');
// formElement.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     console.log(event.target);
// })

/*Project*/

//select elements

let newTask = document.querySelector('#newtask');
let form = document.querySelector('form'); //html e ektai form ase tai otai select hobe
let todoUl = document.querySelector('#incompleteUl'); 
let completeUl = document.querySelector('.complete ul'); 

//funcitons

let createTask = function(task)
{
    let item = document.createElement('li');
    let checkBox = document.createElement('input');
    let name = document.createElement('label');

    name.innerText = task;
    checkBox.type = 'checkbox'; 

    item.appendChild(checkBox);
    item.appendChild(name);

    return item;
}

let submit = function(event)
{
    event.preventDefault();
    let newItem = createTask(newTask.value);
    newTask.value ="";
    todoUl.appendChild(newItem);

    //binding incomplete to the completed
    bindIncompleteItems(newItem,completeTask);
}

let completeTask = function(){
    let liPar = this.parentNode;
    let deleteBtn = document.createElement("button");
    deleteBtn.className = 'delete';
    deleteBtn.innerText = "Delete";
    liPar.appendChild(deleteBtn);

    let box = liPar.querySelector('input[type = "checkbox"]');
    box.remove();

    completeUl.appendChild(liPar);
    bindCompleteItems(liPar,deleteTask);
}

let bindIncompleteItems=function(taskItem,checkboxClick)
{
    let checkbox = taskItem.querySelector('input[type = "checkbox"]');
    checkbox.onchange = checkboxClick;
}

let deleteTask = function()
{
    let par = this.parentNode;
    let gPar = par.parentNode;

    gPar.removeChild(par);

}


let bindCompleteItems = function(taskItem,dTask)
{
    let deleteClick = taskItem.querySelector('.delete');
    deleteClick.onclick =  dTask;
}

form.addEventListener('submit', submit)

for(let i=0;i<todoUl.children.length;i++)
{
    bindIncompleteItems(todoUl.children[i],completeTask);
}

for(let i=0;i<completeUl.children.length;i++)
{
    bindCompleteItems(completeUl.children[i],deleteTask);
}
