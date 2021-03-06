console.log("We are here");
let a = document;
console.log(a);

a = document.all;
// a.forEach(function(element){
//     console.log(element);
// })    /* Through an error, does not work */
Array.from(a).forEach(function (element) {
  console.log(element);
});
console.log(a);

a = document.body;
a = document.forms;
a = document.forms[0];
a = document.links;
a = document.links[0];
a = document.links[0].href;
console.log(a);

a = document.images;
a = document.scripts;
console.log(a);
console.clear();

// DOM ELEMENT SELECTORS
/*
1. Single element selector
2. Multiple element Selector
*/

// 1. Single element selector
// 1. Single element selector
let element = document.getElementById("myfirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
element.innerText = "Harry is a good boy";
element.innerHTML = "<b>Harry is a good boy</b>";
// console.log(element.innerText);

let sel = document.querySelector("#myfirst");
sel = document.querySelector(".child");
sel = document.querySelector("div");
sel.style.color = "green";
console.log(sel);

// 2. Multi element selector
let elems = document.getElementsByClassName("child");
elems = document.getElementsByClassName("container");
elems = document.getElementsByTagName("div");
console.log(elems);

for (let index = 0; index < elems.length; index++) {
  const element = elems[index];
  console.log(element);
  element.style.color = "blue";
}
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue';
// });
// console.log(elems[0].getElementsByClassName('child'))
console.clear();

// CHILDREN, PARENT & TRAVERSING THE DOM
let cont = document.querySelector(".no");
cont = document.querySelector(".container");
// cont = cont.childNodes;   /*Involves everything like text comment*/

// cont=cont.children;        /*inloves main things*/
console.log(cont);

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);

//Node Types:
/*
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType
*/

let container = document.querySelector("div.container");
console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.children);
console.log(container.childElementCount);
/*Count of child elements*/

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

console.clear();

// CREATING , REMOVING AND REPLACING ELEMENTS
/*
console.log('this is tut 16');
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

*/

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"

// EVENTS & EVENTS OBJECT

document.getElementById("heading").addEventListener("click", function (e) {
  let variable;
  console.log("You have clicked the heading");
  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);

  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
  // location.href = '//codewithharry.com'
});
console.clear();

// MORE ON JS EVENTS

let btn = document.getElementById("btn");
btn.addEventListener("click", func1);
btn.addEventListener("dblclick", func2);
btn.addEventListener("mousedown", func3);

function func1(e) {
  console.log("Thanks", e);
}

function func2(e) {
  console.log("Thanks for double click", e);
}

function func3(e) {
  console.log("Thanks for mousedown click", e);
}

document.querySelector(".no").addEventListener("mouseenter", function () {
  console.log("You entered no");
});

document.querySelector(".no").addEventListener("mouseleave", function () {
  console.log("You exited no");
});

document
  .querySelector(".container")
  .addEventListener("mousemove", function (e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${
      e.offsetX + e.offsetY
    })`;
  });

console.clear();

// LOCAL & SESSION STORAGE IN JS

let impArray = ["adrak", "pyaz", "bhindi"];

// // Add a key-value pair inside local Storage
// localStorage.setItem('Name', 'Harry');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
// let name = localStorage.getItem('Name');
// name = JSON.parse(localStorage.getItem('Sabzi'));
// console.log(name)

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));

// MATH OBJECT IN JS

let x = 3;
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;

// Exploring the Math object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.4);
z = Math.ceil(5.3);
z = Math.floor(-5.3);
z = Math.abs(5);
z = Math.sqrt(64);
z = Math.pow(2, 3);
z = Math.min(2, 3, 34, 234, 2342, 34);
z = Math.max(2, 3, 34, 234, 34);
z = Math.random();
z = 100 * Math.random();
z = Math.ceil(50 + (100 - 50) * Math.random());
// a = (0, 1)
// a100 = a*100 = (0, 100)
// a10_100 = 10+a*(100 - 10)

console.log(z);

// 3
// 2.8
// 2
// 1
// 0
// -1
// -2
// -2.7
// -3

// DATE & TIME

let today = new Date();
// console.log(typeof today);
let otherDate = new Date("8-4-2003 04:54:08");
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
console.log(otherDate);
let ab;
ab = otherDate.getDay();
ab = otherDate.getDate();
ab = otherDate.getMinutes();
// ab = otherDate.getSeconds();
// ab = otherDate.getHours();
ab = otherDate.getTime();
ab = otherDate.getMilliseconds();
ab = otherDate.getMonth();
console.log(ab);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);

//ADDING DIV
// Create a new element
console.log("This is tutorial 25");
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElem = document.createElement("div");

// Add text to that created element
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("This is my element. click to edit it");
} else {
  text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute(
  "style",
  "border:2px solid black; width: 154px; margin: 34px; padding:23px;"
);

// Grab the main container
let container2 = document.querySelector(".container");
let first = document.getElementById("myfirst");

// Insert the element before element with id first
container2.insertBefore(divElem, first);

console.log(divElem, container2, first);

// add event listener to the divElem
divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
  }
  //listen for the blur event on textarea
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});

// OBJECT LITERALS, CONSTRUCTOR IN JS

// Object Literal for creating objects
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function () {
    console.log("car is running");
  },
};
// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} Is Running`);
  };
  this.analyze = function () {
    console.log(
      `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
    );
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);

// OBJECT PROTOTYPE IN JS

// Object literal : Object.prototype
let obj = {
  name: "harry",
  channel: "Code With Harry",
  address: "Mars",
};

function Obj(givenName) {
  this.name = givenName;
}

Obj.prototype.getName = function () {
  return this.name;
};

Obj.prototype.setName = function (newName) {
  this.name = newName;
};

let obj2 = new Obj("Rohan Das");
console.log(obj2);
console.clear();



// ASYNCHRONOUS PROFRAMMING



// setTimeout(() => {
//   for (let index = 0; index < 4005; index++) {
//     const element = index;
//     console.log("This is index number" + index);
//   }
// }, 100);

// console.log("done printing");
// console.clear();


// CALLBACK FUNCTION
console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();





//PROMISES BASICS, PROMISES.THEN() & PROMISES.CATCH()

// Promise: Best video on promises
// -resolve
// -reject
// -pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})



// Other way


// Pretend that this response is coming from the server
const students1 = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student1) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students1.push(student1);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students1.forEach(function (student1) {
            str += `<li> ${student1.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent1 = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
console.clear();







// ARROW FUNCTIONS

// Creating a regular function
// const harry = function (){
//     console.log("This is the best person ever")
// }

// Converting it to an arrow function
// const harry = ()=>{
//     console.log("This is the best person ever")
// }
// harry();

// function returning something
// const greet = function(){
//     return "Good Morning";
// }

// One liners do not require braces/return
// one line will automatically return
// const greet = () =>  "Good Morning";

// const greet = () =>  ({name: "harry"});

// Single parameters do not need parenthesis
// but you will have to put parenthesis if there are multiple paramteres
// const greet = (name) => "Good Morning " + name + ending;

// console.log(greet("Harry"));
console.clear();






//FETCH API IN JS

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// function getData() {
//   console.log("Started getData");
//   url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Inside second then");
//       console.log(data);
//     });
// }

// function postData() {
//   url = "http://dummy.restapiexample.com/api/v1/create";
//   data = '{"name":"harglry347485945","salary":"123","age":"23"}';
//   params = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: data,
//   };
//   fetch(url, params)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// console.log("Before running getData")
// getData()
// console.log("After running getData")
// postData();
console.clear();




