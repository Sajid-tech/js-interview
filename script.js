// var let const
/*
var a = 5;
console.log(a)

{
    var a = 10
}

console.log(a)

{
    let b = 10
    const c = 15
    console.log(b)
    console.log(c)
}

*/

// variable shadowing
/*

function test() {
    var a = "hello"
    if (true) {
        let a = "hi"
        console.log(a)

    }
    console.log(a)
}

test()

// but you can't shadow let by var 


function hello() {
    let a = "hello sajid"
    if (true) {
        var a = "hi"
        console.log(a)

    }
    console.log(a)
}

hello()   err: cannot declare blocked scope variable 

*/


// Hoisting 


console.log(count)  // it will check the variable during the creation phase it exist or not

var count = 5;   // it will declare in top becuz of hoisting 


// after hoisting 

var count;
count = 6;
console.log(count)