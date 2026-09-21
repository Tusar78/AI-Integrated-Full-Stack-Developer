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


// Task 01
const developer = {
    name: "Tusar",
    experience: 4,
    skill: "Webflow"
}

const {name, experience, skill} = developer;

// Task 02
const user = {
    name: "Tusar",
    age: 28
};
const {name: userName, age: userAge} = user;

// Task 03
const skills = ["HTML", "CSS", "JavaScript", "React"];
const [firstSkill, secondSkill, thirdSkill, fourthSkill] = skills;

// Task 04
const user = {
    name: "Tusar",
    role: "Developer",
    country: "Bangladesh"
};

const showUser = user => {
    const {name, role, country} = user;
    return `${name} is a ${role} from ${country}`
}
showUser(user);