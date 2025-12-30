// let subtotal = 1000;
// let tax = subtotal * 0.05;
// let total = subtotal + tax;
// console.log(tax, total);


// const deliveryCharge = 40;
// let cartTotal = 1000;
// let isPremiumUser = true;

// if (isPremiumUser) {
//     cartTotal -= deliveryCharge;
// }

// console.log(cartTotal);

// const discount = 0.1;
// const tax = 0.05;
// let subtotal = 1000;
// subtotal -= subtotal * discount;
// subtotal += subtotal * tax;
// console.log("Final Price: " + subtotal);


// Probelm 01: Given a user’s order subtotal, a fixed discount rate, and a tax rate, calculate the final payable price. Apply the discount first. If the user is not a premium member, apply tax on the discounted price. Premium users are exempt from tax. Output the final price.


// const discount = 0.1;
// const tax = 0.05;

// let subtotal = 1000;
// let isPremiumUser = false;

// let discountAmount = subtotal * discount
// let afterDiscount = subtotal - discountAmount;


// let finalPrice = afterDiscount;


// if (!isPremiumUser) {
//     let taxAmount = subtotal * tax;
//     finalPrice = afterDiscount + taxAmount;
// }

// console.log("Final Price for user: ", isPremiumUser ? "Premium" : "Regular", " = ", finalPrice);


/*
🧩 Phase 1 – Problem 1
Problem Name

Calculate Final Salary with Conditional Bonus and Tax

Problem Statement

Given a base salary, a performance score, and employee type, calculate the final salary.
Add a bonus if performance score is 80 or above.
Apply tax only if the employee is not remote.
*/

// const baseSalary = 1000;

// let performanceScore = 95;

// const tax = 0.05;
// const bonus = 0.1;

// let isRemoteEmployee = false;


// let finalSalary = baseSalary;

// if (performanceScore >= 80) {
//     let bonusAmmount = finalSalary * bonus;
//     finalSalary += bonusAmmount;
// }

// if (!isRemoteEmployee) {
//     let taxAmmount = finalSalary * tax;
//     finalSalary += taxAmmount;
// }

// console.log(finalSalary);

/*
🧩 Phase 1 – Problem 1 (Twisted Version)
Problem Name

Calculate Final Salary with Bonus, Penalty, and Conditional Tax

Problem Statement

Given an employee’s base salary, performance score, and work type, calculate the final salary.
Apply bonus or penalty based on performance.
Apply tax only for specific employee types.

*/


// const baseSalary = 1000;

// const tax = 0.05;
// const bonus = 0.1;
// const penalty = 0.05

// let performanceScore = 80;

// let isRemoteEmployee = false;


// let finalSalary = baseSalary;

// if (performanceScore >= 80) {
//     let bonusAmount = baseSalary * bonus;
//     finalSalary += bonusAmount;
// }

// if (performanceScore < 50) {
//     let penaltyAmount = baseSalary * penalty;
//     finalSalary -= penaltyAmount;
// }

// if (!isRemoteEmployee) {
//     let taxAmount = finalSalary * tax;
//     finalSalary += taxAmount;
// }

// console.log(finalSalary);

/*

🧩 Phase 1 – Problem 2
Problem Name

Determine User Access Level and System Message

Problem Statement

Given a user’s role, verification status, and account activity, determine access level and generate a system message.

*/

let userRole = "admin";
let isVerified = true;
let isActive = true;

let accessLevel;
let message;

if (userRole === 'admin' && isActive === true) {
    accessLevel = "FULL ACCESS";
    message = "Welcome Admin, all systems available.";
} else if (userRole === 'user' && isVerified === true && isActive === true) {
    accessLevel = "Limited ACCESS";
    message = "Welcome User, limited features enabled.";
} else {
    accessLevel = "NO ACCESS";
    message = "Access denied. Please contact support.";
}

console.log(accessLevel);
console.log(message);
