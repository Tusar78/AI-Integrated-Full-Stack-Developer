/*
🛠 Phase 2 – Mini Project 1
Order Pricing Engine (Real-World Core Logic)
🎯 Project Goal

একটা order pricing engine বানাতে হবে যেটা real ecommerce / SaaS / AI billing system-এর মতো কাজ করবে।

🧾 Project Description

Given an order subtotal and user context, calculate the final payable amount by applying discount, tax, delivery charge, and conditional rules.

📌 Inputs (Variables)

subtotal → number

isPremiumUser → boolean

hasCoupon → boolean

isExpressDelivery → boolean

📐 Business Rules
1️⃣ Discount Rules

If hasCoupon === true
→ discount = 10% of subtotal

Else
→ no discount

2️⃣ Delivery Charge Rules

base delivery charge = 40

If isPremiumUser === true
→ delivery charge = 0

3️⃣ Tax Rules

tax rate = 5%

tax is applied on price after discount

tax applies only if user is NOT premium

4️⃣ Express Delivery Rules

If isExpressDelivery === true
→ add 60 extra charge

Express charge applies after tax

📤 Output Requirements

You must compute and print:

finalPrice

Optional (but preferred):

discount amount

tax amount

delivery charge

express charge

🚧 Constraints (Strict)

Use only:

let, const

number, boolean

calculation

assignment

if / else if / else

❌ No function

❌ No loop

❌ No array / object
*/

let subtotal = 200;

let hasCoupon = true;
let isPremiumUser = true;
let isExpressDelivery = true;

const DISCOUNT = 0.1; //10%
const TAX = 0.05; //5%
const BASE_DELIVERY_CHARGE = 40;


let discountAmount = 0;
let taxAmount = 0;
let deliveryCharge = BASE_DELIVERY_CHARGE;
let expressCharge = 0;

// 📐 Business Rules

// 1️⃣ Discount Rules
let priceAfterDiscount = subtotal;

if(hasCoupon) {
    discountAmount = subtotal * DISCOUNT;
    priceAfterDiscount -= discountAmount;
}

// 2️⃣ Delivery Charge
if (isPremiumUser) {
    deliveryCharge = 0;
}


// 3️⃣ Tax (only for non-premium)
let priceAfterTax = priceAfterDiscount;

if (!isPremiumUser) {
    taxAmount = priceAfterDiscount * TAX;
    priceAfterTax += taxAmount;
}

// 4️⃣ Express Delivery
let finalPrice = priceAfterTax + deliveryCharge;

if (isExpressDelivery) {
    expressCharge = 40;
    finalPrice += expressCharge;
}

console.log("Final Price = ", finalPrice);
console.log("Discount Amount = ", discountAmount);
console.log("TAX Amount = ",taxAmount);
console.log("Delivery Charge = ",deliveryCharge);
console.log("Express Charge = ",expressCharge);
