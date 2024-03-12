// objects , output based, destructing , object referecnig
/* 
const user = {
    name: "sajid hussain",
    age: 24,
    "like the video": true,
}

// modified th name properties

user.name = "majid hussian"

// delete the user age 

delete user.age


console.log(user)

// acces the key
console.log(user["like the video"])

// to delete the key 
delete user["like the video"]

console.log(user)


const func = (function (a) {
    delete a;
    return a;
})(5)

// delete is when used when you want to dlete a properties of a object not a local variable

console.log(func)   // 5



console.log("how do you add dynamic key value in the object ")


const property = "firstName"
const name = "sajid hussain"
const user = {
    [property]: name,
}

console.log(user)


console.log("looping through object")

const user = {
    name: "sajid hussain",
    age: 24,
    isTotallyAwesome: true,
}

for (item in user) {
    console.log(item)   // only give key
    console.log(user[item])   // give value of keys 

}




console.log("Qno 1. what the output")

const obj = {
    a: "one",
    b: "two",
    a: "three",
}

console.log(obj)  // three two

// two key have same name , so the key add later in object will be printing in obj , so the first name wiill be replaced by later added name and alway be in first position value

console.log("Qno 2. create a function multiplybyTwo(obj that multiplies all numeric property value of nums by 2")

const nums = {
    a: 100,
    b: 200,
    title: "My nums"
}




function multiplyByTwo(item) {
    for (key in item) {
        if (typeof item[key] === "number") {
            item[key] = item[key] * 2
        }

    }
}

multiplyByTwo(nums)
console.log(nums)



console.log("qno 3. whats the output of the folowing code")


const a = {}
const b = { key: "b" }
const c = { key: "c" }

a[b] = 123    // when you tries to convert b in string it will become object object
a["[object object"] = 123
a[c] = 456// when you tries to convert b in string it will become object object
a["[object object"] =456

// so a overlap by  and print 456

console.log(a[b])




console.log("qn.5 : what is JSON.stringfy and JSON.parse")

const user = {
    name: "sajid",
    age: 24,
}

console.log(user)

// to convert object into string we use json.strinfy
console.log(JSON.stringify(user))

strinObj = JSON.stringify(user)

console.log(strinObj)

// to convert string into object use JSON.parse

console.log(JSON.parse(strinObj))

// use full case : set obj in local storage as a string
// if we assign directly object it will not stringfy into string and give use object object

localStorage.setItem("sajid", user)



console.log("qno.6: whats the output");

console.log([..."lydia"]); // three dot are called spread operator
// it will spread all the charachter of  this string note: when it is in square bracket when it is in curly barckert it will pass the vale

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };
console.log(admin); // spread the property of the user here

console.log("qno.7: whats the output");

const settings = {
    username: "sjaid",
    level: 19,
    health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);

console.log(data); //  only string those particcular property those are in square bracket

console.log("qno8: whats the output");

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,  // here this is pointed to widnow object that why it give us NAN
};

console.log(shape.diameter());   // 20
console.log(shape.perimeter());  //NAn

// Desctructing

let user = {
    name: "Piyush",
    age: 24,
    fullName: {
        first: "majid",
        last: "hussain"
    }
}

const { name } = user  // simple desctructing

const { fullName: { last } } = user  // nested desctriing

console.log(last)

console.log(name)


function getItems(fruitList, favoriteFruit, ...args) {  // rest operator
    return [...fruitList, ...args, favoriteFruit] // spread operator
}

console.log(getItems(["banana", "apple"], "pear", "orange"))



console.log("Object Referencing")

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "hello"  // we are not chaning all peroperty here  we are just simply providing the ref not the full object that why it print hello
console.log(d.greeting)  // hello

console.log("What is the output of the following code snippet?")

console.log({ a: 1 } == { a: 1 });

console.log({ a: 1 } === { a: 1 });

// both are false because both are indivisual object wheather you comapring it strincly or nor stricly



let person = { name: 'Lydia' };
const members = [person];
// person = null;

console.log(members);

// it will print array of an object , here person null will not affect the obj because you are not affecting the peroperty of obj 


// if

person.name = null  // than it will affect

console.log(members)
*/

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ? // on reassign the complete object it will not affecting the object  only property will affect on referncing







