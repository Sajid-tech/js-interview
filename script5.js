// currying in js

// example of f(a,b) into f(a)(b)

// when you convert the function from multiple arguments f(a,b) into the series of sequesnce of single arguments f(a)(b) than this is called currying

function f(a) {
    return function (b) {
        return `${a} ${b}`
    }
}

console.log(f(5)(6))

// we can also do f()()()()() it will gonna deep depnd upon how deep is currying 

console.log("Why should we use currying")

// to avoid passing the same variable again and again
// to make your function pure which it expose to less error
// to creaet high order functions

console.log("sum(2)(6)(1)")
/*
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log(sum(2)(6)(1))

const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6
*/

console.log("Question no 2")

/*
evaluate("sum")(4)(2)
evaluate("multiply")(4)(2)
evaluate(divide)(4)(2)
evaluate(substraction)(4)(2)
*/

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation == "sum")
                return a + b;
            else if (operation == "multiply")
                return a * b
            else return "No"
        }
    }
}

console.log(evaluate("sum")(4)(2))


// Infinite Currying

const sums = function (a) {
    return function (b) {
        if (b) {
            return sums(a + b)
        }
        else return a
    }
}

console.log(sums(4)(5)(8)())


// partial appplication and currying functions

// partial application syntax look like this

function sq(a) {
    return function (b, c) {
        return a * b * c
    }
}
/* 
const x = sq(5)
console.log(x(5, 6))
or 
console.log(sq(5)(5, 5))

*/

// currying synatx is 

function dqu(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(dqu(1)(1)(1))



console.log("Manipulating DOM")

function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    }
}

const updateContent = updateElementText("heading")
updateContent("Hello Sajid hussain currying")