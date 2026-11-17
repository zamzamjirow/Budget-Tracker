### 1. Improvements Made to SpendWise This Week

This week, I improved the SpendWise budget tracker by adding more functionality to the dashboard. Users can now enter a monthly budget, add expenses, view their expense records in a table, and see their remaining balance. I also improved the layout and styling to make the application easier to use.

### 2. How Conditionals Are Used in the Project

I used `if` and `else` statements to check different conditions in the application. For example, when a user enters an expense, the application checks whether the amount is valid. I also used conditionals to compare total expenses with the monthly budget and display feedback when the user is close to or has exceeded their budget.

### 3. How Arrays Are Used to Store Data

I used an array called `expenses` to store expense records. Each expense contains information such as its name, category, and amount. When a user adds a new expense, it is added to the array using `push()`. This allows the application to keep track of multiple expenses.

### 4. How the DOM Is Updated

I used DOM manipulation to update the information displayed on the dashboard. JavaScript selects HTML elements and changes their content whenever the user adds an expense or changes the budget. For example, the expense table, total spending, and remaining balance update automatically.

### 5. How User Interactions Are Handled Through Events

I used event listeners to respond to user actions. For example, when a user submits the expense form, JavaScript collects the information, adds the expense to the array, and updates the dashboard. I also added an event listener to the budget form so users can change their monthly budget.

### 6. Challenges Encountered and How They Were Resolved

One challenge I encountered was making sure the expense records and dashboard figures updated correctly whenever a new expense was added. I resolved this by using JavaScript functions to calculate totals and refresh the displayed information.

I also experienced Git and GitHub issues when trying to upload my project because my local repository and GitHub repository had different commits. I resolved this by fixing the merge conflicts, completing the Git rebase, and successfully pushing my changes to GitHub.