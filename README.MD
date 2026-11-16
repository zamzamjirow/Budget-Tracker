# SpendWise Budget Tracker

## About the Project

SpendWise is a budget tracking application designed to help users understand and manage their monthly spending. The application allows users to enter a monthly budget, record their expenses, view spending by category, and calculate their remaining balance.

The project was built using HTML, CSS, and JavaScript. HTML was used to create the dashboard structure, CSS was used to style the application, and JavaScript was used to make the dashboard interactive.

## What I Built

The SpendWise project includes:

- A financial dashboard showing monthly financial information.
- Expense categories such as Food, Transport, Rent, Entertainment, and Utilities.
- A monthly budget form where users can enter or update their budget.
- An expense form where users can enter an expense name, category, amount, and date.
- An expense records table that displays the expenses added by the user.
- Automatic calculations for total expenses and remaining balance.
- Category cards that display spending amounts and percentages.
- Budget feedback messages that change depending on the user's spending.

## How I Built the Project

### 1. HTML Structure

I used HTML to create the dashboard layout, navigation bar, financial cards, budget form, expense form, and expense records table.

I also added IDs and classes to different elements so that JavaScript could access and update them.

### 2. CSS Styling

I used CSS to style the dashboard, including the sidebar, navigation links, financial cards, forms, and expense table.

I also used CSS Grid and Flexbox to arrange the different sections and added responsive styling for smaller screens.

### 3. JavaScript Functionality

JavaScript was used to make the dashboard interactive. It handles expense entries, budget updates, calculations, and changes displayed on the dashboard.

## JavaScript Concepts Implemented

### 1. Variables

Variables are used to store the monthly budget, expenses, and HTML elements.

For example:

```javascript
let budget = 80000;
```

### 2. Arrays and Objects

I used an array called `expenses` to store multiple expense records. Each expense is stored as an object containing its name, category, amount, and date.

### 3. Functions

I created functions to calculate total expenses, format currency, display expense records, and update the dashboard.

### 4. Loops

I used `for` loops to go through the expense array, calculate the total spending, and display all expense records in the table.

### 5. Conditional Statements

I used `if`, `else if`, and `else` statements to validate user input and display different budget messages depending on the amount spent.

### 6. DOM Manipulation

I used JavaScript DOM methods to update the expense table, monthly spending, available balance, and category cards without reloading the page.

### 7. Event Listeners

I used event listeners to handle form submissions. When a user adds an expense, JavaScript collects the information, adds it to the expense array, updates the dashboard, and clears the form.

The budget form also uses an event listener to update the monthly budget and recalculate the remaining balance.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Conclusion

Through this project, I practised using JavaScript concepts to create an interactive expense tracker. I also learned how to connect HTML, CSS, and JavaScript to build a dashboard that responds to user input and updates financial information automatically.