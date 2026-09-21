/*
🛠 Phase 2 – Mini Project 2
User Status & Decision Engine
🎯 Project Goal

একটা decision engine বানাতে হবে যেটা user-এর state দেখে system কী action নেবে সেটা decide করে।
এই টাইপ logic:

backend

AI gating

feature access control
সব জায়গায় লাগে।

🧾 Inputs (Variables)

userType → "admin" | "user" | "guest"

isLoggedIn → boolean

isEmailVerified → boolean

hasActiveSubscription → boolean

📐 Business Rules
1️⃣ Admin Rules

If userType === "admin" and isLoggedIn === true
→ status = "ADMIN_ACTIVE"
→ message = "Admin dashboard access granted."

2️⃣ User Rules

If userType === "user" and isLoggedIn === true and isEmailVerified === true and hasActiveSubscription === true
→ status = "USER_PREMIUM_ACTIVE"
→ message = "Premium user access enabled."

If userType === "user" and isLoggedIn === true and isEmailVerified === true but hasActiveSubscription === false
→ status = "USER_BASIC_ACTIVE"
→ message = "Basic access. Upgrade to premium."

3️⃣ Guest / Fallback Rules

If userType === "guest"
→ status = "GUEST"
→ message = "Please sign up or log in."

Else (any other case)
→ status = "ACCESS_DENIED"
→ message = "Action not allowed."

📤 Output Requirements

You must:

assign status

assign message

print both

🚧 Constraints (Strict)

Use only:

let, const

string, boolean

assignment

calculation (if needed)

if / else if / else

❌ No function

❌ No loop

❌ No array / object
*/