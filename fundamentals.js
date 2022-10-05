//1
const fatherName = 'Akkas Ali'
let age = 45;

// 2
if (age === 45 && fatherName === 'Akkas Ali') {
    console.log('true');
}
else if (age > 45) {
    console.log('older than', fatherName);
}

// 3 
const numbers = [12, 34, 56, 78, 99, 76, 5, 654, 456, 6432, 4565]
numbers[0] = 1

// 4 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

// 5
function add(n1, n2) {
    return n1 + n2
}

// 6 
const classEight = {
    numberOfStudent: 120,
    sections: {
        sectionA: { numberOfStudent: 60, },
        sectionB: { numberOfStudent: 60, }
    },
    goodStudents: 80,
    midLevelStudents: 40,
}

classEight.goodStudents = 100;
classEight['goodStudents'] = 110
const gdStudentOfClass8 = 'goodStudents'
console.log(classEight.goodStudents)