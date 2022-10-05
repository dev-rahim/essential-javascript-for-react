// 1  
const numbers = [12, 34, 54]
const [a, b, c] = numbers
const [element1, element2] = [50, 2]

// 2  
const student = {
    name: 'Rahim',
    roll: 127219,
    whichClass: 'Ten',
    friends: ['rakesh', 'billal', 'thakur'],
    goodFriends: {
        friend1: {
            name: 'utsho',
            roll: 02,
        },
        friend2: {
            name: 'Robib',
            roll: 09,
        },
        friend3: {
            name: 'Kabir',
            roll: 05,
        },
    },
}

// const { name, whichClass, roll, } = student;

const [first, second, third] = student.friends
const { name, roll } = student?.goodFriends?.friend3