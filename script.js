// ===================================
// SPENDWISE - EXPENSE TRACKER
// ===================================

// 1. Monthly budget
let budget = 80000;

// 2. Array storing multiple expenses
let expenses = [
    { name: "Groceries", category: "Food", amount: 12500, date: "2026-11-01" },
    { name: "Bus fare", category: "Transport", amount: 6800, date: "2026-11-02" },
    { name: "House rent", category: "Rent", amount: 25000, date: "2026-11-03" },
    { name: "Movie night", category: "Entertainment", amount: 4500, date: "2026-11-04" },
    { name: "Electricity", category: "Utilities", amount: 5200, date: "2026-11-05" }
];

// 3. Get HTML elements
const expenseForm = document.getElementById("expense-form");
const budgetForm = document.getElementById("budget-form");

const expenseName = document.getElementById("expense-name");
const expenseCategory = document.getElementById("expense-category");
const expenseAmount = document.getElementById("expense-amount");
const expenseDate = document.getElementById("expense-date");

const expenseList = document.getElementById("expense-list");
const budgetInput = document.getElementById("budget-input");
const budgetMessage = document.getElementById("budget-message");

// 4. Format amounts into Kenyan shillings
function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString("en-KE");
}

// 5. Calculate total expenses using a loop
function calculateTotal() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 6. Display all expenses in the HTML table
function displayExpenses() {
    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        const categoryCell = document.createElement("td");
        const amountCell = document.createElement("td");
        const dateCell = document.createElement("td");

        nameCell.textContent = expense.name;
        categoryCell.textContent = expense.category;
        amountCell.textContent = formatCurrency(expense.amount);
        dateCell.textContent = expense.date;

        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(amountCell);
        row.appendChild(dateCell);

        expenseList.appendChild(row);
    }
}

// 7. Update dashboard information
function updateDashboard() {
    const totalExpenses = calculateTotal();
    const remainingBalance = budget - totalExpenses;

    // Update monthly spending and available balance
    const summaryAmounts = document.querySelectorAll(".summary-box strong");

    summaryAmounts[0].textContent = formatCurrency(totalExpenses);
    summaryAmounts[1].textContent = formatCurrency(remainingBalance);

    // Update category cards
    const cards = document.querySelectorAll(".finance-card");

    cards.forEach(function(card) {
        const category = card.querySelector(".card-label").textContent;

        if (category === "Savings") {
            return;
        }

        let categoryTotal = 0;

        for (let i = 0; i < expenses.length; i++) {
            if (expenses[i].category === category) {
                categoryTotal += expenses[i].amount;
            }
        }

        const amountElement = card.querySelector(".card-info h3");
        const percentageElement = card.querySelector(".card-footer span");

        amountElement.textContent = formatCurrency(categoryTotal);

        let percentage = 0;

        if (totalExpenses > 0) {
            percentage = (categoryTotal / totalExpenses) * 100;
        }

        percentageElement.textContent = Math.round(percentage) + "% of expenses";
    });

    // 8. Conditional statements for budget feedback
    if (totalExpenses > budget) {
        budgetMessage.textContent = "Warning! You have exceeded your monthly budget.";
    } else if (totalExpenses >= budget * 0.8) {
        budgetMessage.textContent = "Careful! You are getting close to your budget limit.";
    } else {
        budgetMessage.textContent = "Great! You are staying within your budget.";
    }
}

// 9. Listen for expense form submissions
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const category = expenseCategory.value;
    const amount = Number(expenseAmount.value);
    const date = expenseDate.value;

    // Validate user input using conditionals
    if (name === "" || category === "" || date === "") {
        alert("Please fill in all the expense details.");
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid expense amount.");
        return;
    }

    // Add the new expense to the array
    expenses.push({
        name: name,
        category: category,
        amount: amount,
        date: date
    });

    // Refresh the table and dashboard
    displayExpenses();
    updateDashboard();

    // Clear the form
    expenseForm.reset();
});

// 10. Listen for monthly budget changes
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newBudget = Number(budgetInput.value);

    if (!Number.isFinite(newBudget) || newBudget <= 0) {
        alert("Please enter a valid monthly budget.");
        return;
    }

    budget = newBudget;

    updateDashboard();
});

// 11. Display initial information when the page loads
displayExpenses();
updateDashboard();

console.log("SpendWise is running successfully!");
