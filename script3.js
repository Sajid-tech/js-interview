// Hoisting, scope , callback,arrow functions

console.log("what is function declarations")

function square(num) {
    return num * num
}
console.log(square(6))

console.log("what is function  expression ")

// when you stored the function inside the variable is called function 

const squares = function (num) {
    return num + num
}

console.log(squares(5))

//

console.log("What are first class functions")

// in a language where a function can be treated like a variable is called first class function in these case function can be manipulate, passed into another fucntion, everthy a variable can do

function squa(num) {
    return num * num
}

function displaySqaure(fn) {
    console.log("sqaure is " + fn(5))
}

displaySqaure(squa)  // a function is treated like a variable and passed in another fucntion 


console.log("what is IIFE")

// immediatly invoked function expression 
/*
function squar(num) {
    console.log(num * num)
}
 
squar(5)
 
 //iffe look like this

(function squar(item) {
    console.log(item * item)
})(5)



//iife output based questions

(function (x) {
    return (function (y) {
        console.log(x) // 1 -- first it gonna search in its inner scope when it didnot find anything than it will search on parent scope
    })(2)
})(1)

*/


console.log("function scope - o/p based question")

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000)
// }

// in simple launage  every time the for loop run it will create another blocked scope for this function print 0,1,2,3,4

// but if it is var , var doesn't have blocked scope so its print 55555
/*
Using let:

With let, each time we go through the loop, a new variable i is created. So, when each setTimeout runs, it remembers the value of i from that specific iteration of the loop.
This means each setTimeout prints t he value of i it remembers, which is 0, 1, 2, 3, and 4 respectively for each iteration of the loop.
Using var:

With var, there's only one i that's shared across all the setTimeout functions.
By the time any of the setTimeout functions run, the loop has already finished and i is left with its final value, which is 5.
So, all the setTimeout functions print the final value of i, which is 5.
*/

console.log("Hoisting function")

// function is hoisted differentlty than a normal variable does
functionName()   // calling the fucntion before its declare , its still give me output
function functionName() {
    console.log("roadside coder")
}


// variable hoisting
console.log(x)  // it will give me undefined but in function it it not the case
var x = 5


console.log("function hoisting  output based questions")


var y = 21

var fun = function () {
    console.log(y)  // shadowing variable is there than local scope will be tkingas variable and here local scope variable being hoisted therefore it will be undefined
    var y = 20
}

fun()


console.log("params vs arguments")


function argu(num) {    // params or parameter
    console.log(num * num)
}

argu(10)  // arguments


// spread vs rest operator


function multiply(num1, num2) {
    console.log(num1 * num2)
}

var arr = [5, 7]

multiply(...arr)  // spread operator-- spread the both of these value  and pass in the functions

function multiplys(...nums) { // rest operator
    console.log(nums)   // when you have to recieve the value
    console.log(nums[0] * nums[1])  // gonna work same
}

var arrw = [10, 7]

multiplys(...arrw)



console.log("o/p based questions ")

const fns = (a, x, y, ...numbers) => {
    console.log(x, y, numbers)// so x will 6 y belongs to 3 and remailing will be for rest operator 7,8,9
}

fns(5, 6, 3, 7, 8, 9)



console.log("what is callback functions")

// callback function are first class function in javascript 
// official -- a call back function passed as an argument to another fucntion 

// eg.. settime out , map ,filter,reduce and event listener


// document.addEventListener("click",function(name){

// })    function is callback function



console.log("Arrow function")

// Arrow function is introduced in Es6 js version

// normal function

const add = function (firstNum, secondNum) {
    return firstNum + secondNum
};
console.log(add(9, 1))

// arrow function 
const adds = (first, second) => {
    return first + second
}

console.log(adds(5, 6))

// in arrow function we can return value without return keyword  if its in one liner function

console.log("Implicit  return keyword")


const sqauress = (num) => {
    return num * num
}
// one liner

const sqq = (num) => num * num


console.log("arguments")


function na() {
    console.log(arguments)
}

na(1, 5, 6, 9)  // in normal function you can get the argument like this in arrow function you can't



console.log("this keyowrd")

// eg


let user = {
    username: "Sajid hussain",
    rc1: () => {
        console.log("hello" + this.username) // IN ARROW FUNCTION YOU CANT USE THIS FUCNTION  BECUZ THIS HERE POINTED TO GLOBAL OBEJCT
    },
    rc2() {
        console.log("hello" + this.username)
    }
}

user.rc1()
user.rc2()







