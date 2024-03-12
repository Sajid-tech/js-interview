// Closures in js , lexixal adn output based question , pollyfills

console.log("1.Lexical scope")

// a scope refferd to the current context of the your code , it can be either globally or locally defined and with the es6 version of javascript we also haave the blocked scoper

//  variable defined outside can accecible inside of  another function defined after a variale declaration but the opposite is not true is called lexical scope


// global scoper
var username = "Sajid hussain"

function local() {
    // local scope
    console.log(username) // sajid hussain give value 
}

local()

// but opposite is not true
/*
function lo() {
    var user = "sajid husain"

}

console.log(user) // user is not defined

local()
*/

console.log("another example of lexical scope")

//global scope
function subscribe() {
    var name = "sajidhussain hello"
    //inner scope 2
    function displayName() {    // and display name is closure
        //iner scope
        console.log(name)    // print  name succesfully , becuz of lexical scope
    }
    displayName()
}

subscribe()


console.log("what is closure")


// so displayName function was able access var name defined outside of this scope

// closure is created everytime the function is created
// closure binds it in enviroment or in lexical scope



// closure give you the access of outer functionn scope within the inner function


// eg
function makeFunc() {
    var name = 'Roadside Coder';
    function displayNam(num) {   // displayname is closure 
        console.log(name, num);    // alert becuz of lexical scoper
    }
    return displayNam;
}

// var myFunc = makeFunc();
// myFunc();
//or write as it works

makeFunc()(5)

// hindi -- jb ab function return krte ho than only function return nhi hota useke stah uska lexical scope bhi return hota hai

// what the use of it

// js closure make it possible for a function to have private variable


console.log("closure scope chain")

// every closure scope chain hase three scope

//local scope
// outer function scope
// global scope

//this is global scope

var userna = "sajid hsusa"
function makeFunc() {
    var name = 'Roadside Coder' // outer scope
    function displayName() {
        console.log(name, userna);   // local scope
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
// closure scope chain have all three scope



// output based question


console.log("qno.1")

let count = 0;
(function printCount() {
    if (count === 0) {
        let count = 1  // shodwing 
        console.log(count)   // print 1

    }
    console.log(count)  // print 0
})()


console.log("qno.2 : write a ducntion that would allow you to do this")

// var addSix = createBase(6);
// addSix(10);// returns 16
// addSix(21);// returns 27

// ans :  closure question

function createBase(num) {
    return function (innerNum) {
        console.log(num + innerNum)
    }
}

var addSix = createBase(6)

addSix(10)
addSix(21)


console.log("qno.3  :How do you optimise time using closures?")


function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i
    }
    return function (index) {
        console.log(a[index])
    }

}

const closure = find()

console.time("6");
closure(6); // this takes 37ms
console.timeEnd("6");
console.time("12");
closure(12); // this takes 135ms
console.timeEnd("12");


console.log("qno4. What will be the output for the following?")

function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, 1000);
    }
}

a()

// by using closure 

for (var i = 0; i < 3; i++) {
    function inner(i) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, 1000);
    }
    inner(i)
}


// output will be , 3,3,3
// explantaion : var doesn't have a blocked scope var is a functional scope or global scope , what happening over hereis 
// The problem is that by the time the log functions are actually executed (after 1 second each), the loop has already finished iterating. The i variable inside the closure refers to the same memory location, and its value has incremented to 3 (after the loop).

console.log("qno.5: How would you use a closure to create a private counter?")


// private counter


function counter() {
    var _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
        add: function (increment) { _counter += increment; },
        retrieve: function () {
            return 'The counter is currently at: ' + _counter;
        }
    }
}

// error if we try to access the private variable like below// _counter;// usage of our counter function
var c = counter();
c.add(65);
c.add(9);

// now we can access the private variable in the following way
console.log(c.retrieve())// => The counter is currently at: 14



console.log("qno.5 what is ,module pattern")


// module pattern something look like this 

var Module = (function () {
    function privateMethod() {
        // do something
        console.log("private")
    }

    return {
        publicMethod: function () {
            // can call privateMethod();
            console.log("public ")

        }
    };
})();

Module.publicMethod() // works
// Module.privateMethod() // uncaught refercne err , becuz itsnot retrun anything 

// some time you want to write api in private method and manipulate an dreturn it in public method so that you don't want to let them know you apis than we use this

// The module pattern is a design pattern used for improving the maintainability and reusability of the code by creating public and private access levels. Sometimes called encapsulation, it protects the value inside a module from being accessed from other scopes.



console.log("Qno7. make this run only once")


let view
function likeTheVideo() {
    let called = 0
    return function () {
        if (called > 0) {
            console.log("already run")
        } else {
            view = "Roadside Coder"
            console.log("Subscribe to", view)
            called++  // called is not zero anymore
        }
    }

}

const already = likeTheVideo();
already()
already()
already()
already()


console.log("difrence between closure and scope")

/*
Scopes determine where variables are accessible.
Closures allow functions to access to variables from their outer scopes 
*/






