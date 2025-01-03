document.getElementById('submit-date').addEventListener('click', function() {
    const selectedDate = document.getElementById('expense-date').value;
    if (selectedDate) {
        // Fetch expenses for the selected date (or the closest matching data)
        fetchExpensesForDate(selectedDate);
    } else {
        alert('Please select a date');
    }
});

function fetchExpensesForDate(date) {
    // Example expenses data for testing
    const expenses = [
        { date: '2025-01-01', description: 'Groceries', amount: 50 },
        { date: '2025-01-02', description: 'Lunch', amount: 15 },
        { date: '2025-01-02', description: 'Transport', amount: 10 },
        { date: '2025-01-03', description: 'Entertainment', amount: 20 },
        { date: '2025-01-03', description: 'Dinner', amount: 30 }
    ];

    // Filter expenses for the selected date
    const filteredExpenses = expenses.filter(expense => expense.date === date);
    
    // Update the transaction details section
    const transactionList = document.querySelector('.transaction-list');
    transactionList.innerHTML = '';

    if (filteredExpenses.length > 0) {
        filteredExpenses.forEach(expense => {
            const transactionElement = document.createElement('div');
            transactionElement.classList.add('transaction');
            transactionElement.innerHTML = `
                <p>${expense.description}</p>
                <p class="amount">$${expense.amount}</p>
            `;
            transactionList.appendChild(transactionElement);
        });
    } else {
        transactionList.innerHTML = `<p>No expenses for this date.</p>`;
    }

    // Calculate and display the expenses for daily, weekly, monthly, and yearly
    updateExpenseSummary(expenses);
}

function updateExpenseSummary(expenses) {
    // Calculate daily, weekly, monthly, and yearly totals (simple implementation)
    const dailyTotal = expenses.reduce((total, expense) => total + expense.amount, 0);
    const weeklyTotal = dailyTotal * 7; // Just a placeholder for example
    const monthlyTotal = dailyTotal * 30; // Just a placeholder for example
    const yearlyTotal = dailyTotal * 365; // Just a placeholder for example

    document.getElementById('daily-expense').textContent = `$${dailyTotal}`;
    document.getElementById('weekly-expense').textContent = `$${weeklyTotal}`;
    document.getElementById('monthly-expense').textContent = `$${monthlyTotal}`;
    document.getElementById('yearly-expense').textContent = `$${yearlyTotal}`;
}
