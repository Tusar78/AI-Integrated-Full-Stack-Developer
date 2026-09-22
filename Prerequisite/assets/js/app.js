// const user = {
//     name: "Tusar"
// }
// console.log(user)

// user.name = 'Jannat';
// console.log(user)

// Traditional Function
// function greet(name) {
//     return `Hello, ${name}`
// }

// const first = greet('Tusar');
// console.log(first);

// Arrow Function
// const greet = name => `Hi, ${name}`

// const first = greet('Jannat');
// console.log(first);

// Task 01
// const name = "Tusar";
// let age = 28;

// console.log(`My name is ${name} and I am ${age} years old.`);

// // Task 02
// const square = (base) => {
//   console.log(base * base);
// };
// square(5);

// // Task 03
// const greet = (name) => `Hello ${name}`;
// console.log(greet("Tusar"));

// // Task 04
// const product = {
//   name: "MacBook",
//   price: 120000,
// };
// const getProductInfo = (product) => `${product.name} costs ${product.price} BDT`;
// console.log(getProductInfo(product));


// Destructuring
// const user = {
//     name: 'Tusar',
//     age: 28,
//     role: 'Web Developer'
// }

// const {name:userName, rolee} = user;
// console.log(rolee);

// const friends = ['Tusar', 'Jannat', 'Aopo', 'Salman', 'Asha', 'Tafhim']
// const [name1, name2, , , name3] = friends;
// console.log(name3);


// // Task 01
// const developer = {
//     name: "Tusar",
//     experience: 4,
//     skill: "Webflow"
// }

// const {name, experience, skill} = developer;

// // Task 02
// const user = {
//     name: "Tusar",
//     age: 28
// };
// const {name: userName, age: userAge} = user;

// // Task 03
// const skills = ["HTML", "CSS", "JavaScript", "React"];
// const [firstSkill, secondSkill, thirdSkill, fourthSkill] = skills;

// // Task 04
// const user = {
//     name: "Tusar",
//     role: "Developer",
//     country: "Bangladesh"
// };

// const showUser = user => {
//     const {name, role, country} = user;
//     return `${name} is a ${role} from ${country}`
// }
// showUser(user);


// const numbers = [10, 20, 30];
// console.log(numbers);

// const newNumber = [0, ...numbers, 78];
// console.log(newNumber);


// const user = {
//     name: 'Tusar',
//     age: 26,
//     role: 'Web Developer'
// }
// console.log(user);

// const newUser = {
//     ...user,
//     age: 25,
//     name: 'Jannat'
// }

// console.log(newUser);

// const basicInfo = {
//     name: "Tusar",
//     age: 28
// };

// const jobInfo = {
//     role: "Developer",
//     company: "Basecom"
// };

// const info = {
//     ...basicInfo,
//     ...jobInfo
// }

// console.log(info);


// const user = {
//     name: 'Tusar',
//     age: 26,
//     role: 'Web Developer'
// }

// const updateUser = {
//     ...user,
//     color: 'Black',
// }

// console.log(updateUser);


// Task 01
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const skills = [...frontend, ...backend];
console.log(skills);

// Task 02
// const user = {
//     name: "Tusar",
//     age: 28,
//     role: "Developer"
// };

// const updateUser = {
//     ...user,
//     age: 29,
//     role: 'Senior Developer'
// }
// console.log(updateUser);

// Task 03
const user = {
    name: "Tusar",
    age: 28,
    role: "Developer"
};

const updateAge = (oldUser, newAge) => {
    const updateUser = {
        ...oldUser,
        age: newAge
    }

    return updateUser;
} 
console.log(updateAge(user, 29));


// Task 04
const sum = (...rest) => {
    let result = 0;
    rest.forEach(num => result += num)
    return result;
}
console.log(sum(10, 20, 30, 40));
