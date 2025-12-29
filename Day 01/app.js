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


const discount = 0.1;
const tax = 0.05;

let subtotal = 1000;
let isPremiumUser = false;

let discountAmount = subtotal * discount
let afterDiscount = subtotal - discountAmount;


let finalPrice = afterDiscount;


if (!isPremiumUser) {
    let taxAmount = subtotal * tax;
    finalPrice = afterDiscount + taxAmount;
}

console.log("Final Price for user: ", isPremiumUser ? "Premium" : "Regular", " = ", finalPrice);
