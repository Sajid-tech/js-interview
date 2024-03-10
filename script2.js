// map filter and reduce , pollyfills

// 1. map
console.log("map function")

const num = [1, 2, 3, 4, 5]

const binary = num.map((item) => item.toString(2))
const multithreee = num.map((item) => {
    return item * 3
})
const multithree = num.map((item, index) => {
    return item * 3 + index
})
console.log(binary)
console.log(multithreee)
console.log(multithree)


//2 .filter -- filter return only those array which full the provided criteria

console.log("filter function")
const moreThanTwo = num.filter((item) => {
    return item > 2
})

console.log(moreThanTwo)

//3. reduce  ---  reduce will down to the array in one value
console.log("reduce function")

const sum = num.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)
const sums = num.reduce((h1, h2, i, arr) => {
    return h1 + h2 + i;
}, 0)
const multi = num.reduce((h1, h2, i, arr) => {
    return h1 * h2;
}, 0)


console.log(sum)   // 15
console.log(sums)  //25
console.log(multi)  // 0


// Plyfills -- a piece of code of modern functionality to older browser that are lack of native support 

console.log("polyfills of map function")

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))

    }

    return temp

}

const nums = [85, 59, 68, 47]
const polyMap = nums.myMap((item) => {
    return item * 3
})

console.log(polyMap)


console.log("polyfills of filter function")

Array.prototype.myFilter = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i])
        }


    }
    return temp
}

const count = [5, 6, 7, 8, 9]

const polyFilter = count.myFilter((item) => {
    return item > 6
})
console.log(polyFilter)


console.log("polyfills of reduce function")

// arr.reduce((acc,curr,i,arr)=>{},intaialvalue)


Array.prototype.myReduce = function (cb, intialvalue) {
    var accumulator = intialvalue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]

    }

    return accumulator
}

const counts = [2, 4, 6, 8]

const normalReduce = counts.reduce((h1, h2) => {
    return h1 + h2
}, 0)

const polyReduce = counts.myReduce((h1, h2, i) => {
    return h1 + h2 + i
})

console.log(normalReduce)
console.log(polyReduce)

console.log("map vs foreach ")

// map function return a new array with the result of the fucnction

const arr = [1, 2, 3, 4, 5, 6, 7]

const mapResult = arr.map((item) => {
    return item * 2
})

const forEachResult = arr.forEach((item, i) => {
    arr[i] = item + 2;
})

console.log(mapResult)
console.log(forEachResult, "modified array", arr)  // forEachResult new array don't give , only modified original array --[arr]


console.log("output based question")

let students = [
    { name: "sajid", roll: 32, marks: 85 },
    { name: "majid", roll: 2, marks: 45 },
    { name: "wajid", roll: 52, marks: 65 },
    { name: "najid", roll: 12, marks: 8 }
]

// return name with capital letters

let names = []

for (let i = 0; i < students.length; i++) {
    names.push(students[i].name.toUpperCase())

}

const mapName = students.map((item) => {
    return item.name.toUpperCase()
})

const forEachMap = students.forEach((item, i) => {
    students[i] = item.name.toUpperCase()
})
console.log(names)
console.log(mapName)
console.log(forEachMap, students)

console.log("question 2")

// return only those who scored more than 60 marks

// 1.

let student = [
    { name: "sajid", roll: 31, marks: 80 },
    { name: "majid", roll: 15, marks: 69 },
    { name: "wajid", roll: 16, marks: 35 },
    { name: "najid", roll: 7, marks: 55 }
]


const filterMap = student.map((item) => {
    return item.marks
}).filter((items) => {
    return items > 60
})
const filterMaps = student.filter((items) => {
    return items.marks > 60
})

console.log(filterMap)  // it will show only marks
console.log(filterMaps)  // it will show two object having marks greater than 60

console.log(" print those having marks greater than 60 and roll grater than 15")


let stu = [
    { name: "sajid", roll: 31, marks: 80 },
    { name: "majid", roll: 15, marks: 69 },
    { name: "wajid", roll: 16, marks: 35 },
    { name: "najid", roll: 7, marks: 55 }
]

const doubleFilter = stu.filter((item) => {
    return item.marks > 60 && item.roll > 15
})


console.log(doubleFilter)

console.log("sum of marks of all of the students")

// const sumss = stu.map((item) => item.marks).reduce((h1, h2) => { return h1 + h2 }, 0)

const sumss = stu.reduce((h1, h2) => {
    return h1 + h2.marks
}, 0)

console.log(sumss)


console.log("chaing map and filter")

let stud = [
    { name: "sajid", roll: 31, marks: 80 },
    { name: "majid", roll: 15, marks: 69 },
    { name: "wajid", roll: 16, marks: 35 },
    { name: "najid", roll: 7, marks: 55 }
]

// return only names of students who scored than 60

const aboveSixty = stud.filter((item) => {
    return item.marks > 60
}).map((items) => {
    return items.name
})
console.log(aboveSixty)


// return total marks for students with marks greater than 60 after 20 marks have been added to those scored less than 60


let stude = [
    { name: "sajid", roll: 31, marks: 80 },
    { name: "majid", roll: 15, marks: 69 },
    { name: "wajid", roll: 16, marks: 35 },
    { name: "najid", roll: 7, marks: 55 }
]


const totalMarks = stude.map((item) => {
    if (item.marks < 60) {
        item.marks += 20
    }
    return item.marks
}).filter((items => {
    return items > 60
})).reduce((h1, h2) => { return h1 + h2 }, 0)

console.log(totalMarks)