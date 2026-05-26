// 1. Javascript arrays
//              0         1         2
const names = ["Rowan", "Kaladin", "Eowyn"];
console.log(names);

console.log(names[0])
console.log(names[names.length - 1])

const ages = [2, 20, 24];

let mixArray = ["Rowan", 2, "Kaladin", 20, "Eowyn", 24]
console.log(mixArray);

// 2. Javascript objects
let studentName = "Bob";
let studentClass = "WDD131";

//literal objects
let student = {
    // key/value pairs
    name : "Bob",
    class : "WDD131",
    grade : "A",
    age : 27
}

console.log(student);
console.log(student.class);


// 3. Array methods
names.forEach((name) => {
    // this code executes once per each item in the array
    console.log(name);
})

// Map function returns a NEW array with values returned from function
let newNameArray = names.map((name) => {
    return name + " Jones";
})
console.log(newNameArray)

// Filter function returns a new array with filtered values
let filteredArray =  names.filter((name) => {
    // filter returns boolean. True keep, false don't keep.
    return name[0] === 'K';
})

console.log(filteredArray);

// .reduce() takes a function with an accumulator (total) and the current item
// We also provide a starting value (0 in this case)
let totalAge = ages.reduce((accumulator, currentAge) => {
    return accumulator + currentAge;
}, 0);

console.log(totalAge);

// .indexOf returns the first index at which a given element can be found
let position = names.indexOf("Kaladin");

console.log(position);

// Template literals use backticks and ${} to inject variables
let summary = `The student ${student.name} is ${student.age} years old and is in ${student.class}.`;

console.log(summary); 


student.major = "Web Design";
let lookUp = "grade";
console.log(student[lookUp]);

let classroom = [
    { name: "Rowan", grade: "A" },
    { name: "Kaladin", grade: "B" },
    { name: "Eowyn", grade: "A" }
];

console.log(classroom[1].name);

