console.log("SpendWise JavaScript is working!");

let budget = 80000;

let foodExpense = 12500;
let transportExpense = 6800;
let rentExpense = 25000;
let entertainmentExpense = 4500;
let utilitiesExpense = 5200;

let totalExpenses = foodExpense + transportExpense + rentExpense + entertainmentExpense + utilitiesExpense;

console.log("Budget:", budget);
console.log("Total Expenses:", totalExpenses);

let userBudget = Number(prompt("Enter your monthly budget:"));

console.log("User Budget:", userBudget);

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

let remainingBalance = calculateRemainingBalance(userBudget, totalExpenses);

console.log("Remaining Balance:", remainingBalance);
function displayBudgetSummary(budget, expenses) {
    let remaining = calculateRemainingBalance(budget, expenses);

    console.log("----- SpendWise Budget Summary -----");
    console.log("Monthly Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + expenses);
    console.log("Remaining Balance: KSh " + remaining);
}

displayBudgetSummary(userBudget, totalExpenses);