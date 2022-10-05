// 1 
const classEight = {
    numberOfStudent: 120,
    sections: {
        sectionA: { numberOfStudent: 60, },
        sectionB: { numberOfStudent: 60, }
    },
    goodStudents: 80,
    midLevelStudents: 40,
}

console.log(`
In class eight here ${classEight.numberOfStudent} Students.
`);

// 2 
const add = () => 6 + 3
const addNumber = (a, b) => a + b
const multiply = (a, b) => { return a * b }

// 3 
const numbers = [12, 34, 56, 78, 99, 76, 5, 654, 456, 6432, 4565]
console.log(...numbers);

const newNumbers = [...numbers, 3443434343]
console.log(newNumbers);