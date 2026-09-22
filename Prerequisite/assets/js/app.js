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
// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express"];
// const skills = [...frontend, ...backend];
// console.log(skills);

// // Task 02
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

// // Task 03
// const user = {
//     name: "Tusar",
//     age: 28,
//     role: "Developer"
// };

// const updateAge = (oldUser, newAge) => {
//     const updateUser = {
//         ...oldUser,
//         age: newAge
//     }

//     return updateUser;
// }
// console.log(updateAge(user, 29));

// // Task 04
// const sum = (...rest) => {
//     let result = 0;
//     rest.forEach(num => result += num)
//     return result;
// }
// console.log(sum(10, 20, 30, 40));

// Task 01
// const numbers = [1, 2, 3, 4, 5];
// const squireNumbers = numbers.map(number => number * 2);
// console.log(squireNumbers);

// // Task 02
// const numbers = [10, 15, 20, 25, 30, 35];
// const newNumbers = numbers.filter((number) => number > 20);
// console.log(newNumbers);

// // Task 03
// const users = [
//   { id: 1, name: "Tusar" },
//   { id: 2, name: "Rahim" },
//   { id: 3, name: "Karim" },
// ];

// const newUser = users.find((user) => user.id === 3);
// console.log(newUser);

// // Task 04
// const prices = [100, 200, 300, 400];
// const sum = prices.reduce((sum, acc) => {
//   return sum + acc;
// }, 0);

// console.log(sum);

// // Task 05
// const products = [
//   { name: "Laptop", price: 100000, inStock: true },
//   { name: "Mouse", price: 2000, inStock: false },
//   { name: "Keyboard", price: 5000, inStock: true },
//   { name: "Monitor", price: 30000, inStock: false },
// ];

// const productNames = products
//   .filter((product) => product.inStock)
//   .map((product) => product.name);
// console.log(productNames);

// console.log('Start');

// setTimeout(() => {
//     console.log('Tusar');
// }, 1000)

// console.log('end');

// Task 01 — Promise
// const promise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Success!");
//   } else {
//     reject("Failed!");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Task 02 — Async/Await
// const newPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Hello from Promise!");
//   } else {
//     reject("Failed!");
//   }
// });

// const getMessage = async (promise) => {
//     try {
//         const response = await Promise.resolve(promise)
//         console.log(response);

//     } catch (error) {
//         console.log(error);

//     }
// }

// getMessage(newPromise)

// // Task 03
// const promise = new Promise((resolve, reject) => {
//   const success = false;
//   if (success) {
//     resolve("Successfully Learn The big library Reactjs");
//   } else {
//     reject("Promise intentionally reject!");
//   }
// });

// const getData = async (promise) => {
//     try {
//         const response = await Promise.resolve(promise)
//         console.log(response);

//     } catch (error) {
//         console.log(error);

//     }
// }

// getData(promise)

// // Task 04 and Task 05
// const USERSAPI = 'https://jsonplaceholder.typicode.com/users';
// const getUsers = async (userApi) => {
//     try {
//         const response = await fetch(userApi)
//         const users = await response.json();

//         // Get Name & Email From User
//         const userInfo = users.map(user => {
//             return {
//                 name: user.name,
//                 email: user.email
//             }
//         })

//         console.log(userInfo);

//     } catch (error) {
//         console.log(error);

//     }
// }
// getUsers(USERSAPI)

// const USERSAPI = "https://jsonplaceholder.typicode.com/users";
// const postUser = async () => {
//   const response = await fetch(USERSAPI, {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Tusar",
//       age: 28,
//       role: "Web developer",
//       email: "tusar@gmail.com",
//     }),
//   })
//   const data = await response.json();
//   console.log(data);

// };

// postUser();

// // Task 01 — GET
// const URL = `https://jsonplaceholder.typicode.com/posts`;
// const getPost = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("Failed to fetch users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getPost(URL);

// // Task 02 — Data Transformation
// const URL = `https://jsonplaceholder.typicode.com/posts`;
// const getPost = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("Failed to fetch users");
//     const posts = await response.json();
//     const preciseData = posts.map((post) => {
//       return {
//         id: post.id,
//         title: post.title,
//       };
//     });
//     console.log(preciseData);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getPost(URL);

// // Task 03 -- Post
// const URL = `https://jsonplaceholder.typicode.com/users`;
// const setPost = async (url) => {
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: "Tusar",
//         role: "Web Developer",
//       }),
//     });
//     if (!response.ok) throw new Error("Failed to fetch users");
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };

// setPost(URL);

// // Task 04 — 🔥 React Simulation
// const users = [
//   { name: "Tusar", active: true },
//   { name: "Rahim", active: false },
//   { name: "Karim", active: true },
// ];

// const getUsers = async (usersdata) => {
//   console.log("Starting simulation...");

//   try {
//     const users = await new Promise((resolve) => {
//       setTimeout(() => resolve(usersdata), 1000);
//     });

//     const usersName = users
//       .filter((user) => user.active)
//       .map((user) => user.name);

//     console.log(usersName);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUsers(users);

// Task 01
// Answer: Tusar

// // Task 02
// Answer: arrow function er moddhe this er kono ostitto nei, arrow function tar scope er moddhe this create ba bind kore nah

// // Task 03
// Answer: karon class component data mone rakhto object instance (this) er maddhome kintu  functional component data mone rakhe closure er maddhome jeita onek beshi shohojboddho.

const selector = (type) => document.querySelector(type);

// Task 01
const btn = selector(".btn");
btn.addEventListener("click", () => {
  console.log("Button Clicked!");
});

// Task 02
const nameField = selector(".nameField");
nameField.addEventListener("keyup", (event) => {
  console.log(event.target.value);
});

// Task 03
const greetBtn = selector(".greet");
const greetUser = (name) => {
  console.log(`Hello ${name}`);
};
greetBtn.addEventListener("click", () => {
  return greetUser('Jannat');
});

// Task 04
const textForm = selector('.textForm');
textForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form Submitted');    
})