// 1 
let age = null;
if (age) {
    // console.log("true");
} else {
    // console.log("false");
}

// 2 
if (!age) {
    // console.log('false');
} else {
    // console.log('true');
}

// 3 
age = !age ? console.log('false') : console.log('true');

// 4  
const money = 40;
let food = money < 50 ? 'dal vat' : 'vat dim murgi';
// console.log(food);

// 5 
console.log(age + '');

// 6
console.log(+age);

// 7 

let isActive = true;
const showUser = () => { console.log('showUser'); }
const hideUser = () => { console.log('hideUser'); }
isActive ? showUser() : hideUser()

// use && if the left side is true
isActive && showUser()

// use && if the left side is true
isActive || showUser()

// 8
// toggle boolean
isActive = !isActive