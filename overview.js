// overview.js

// Pie Chart for Expense Breakdown
const expensePieChartCtx = document.getElementById("expensePieChart").getContext("2d");
new Chart(expensePieChartCtx, {
    type: "pie",
    data: {
        labels: ["Rent", "Food", "Utilities", "Entertainment", "Shopping"],
        datasets: [
            {
                data: [1200, 800, 400, 300, 200],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9F40"],
            },
        ],
    },
    options: {
        responsive: true,
    },
});

// Line Chart for Budget vs Actual Spending
const budgetLineChartCtx = document.getElementById("budgetLineChart").getContext("2d");
new Chart(budgetLineChartCtx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Budget",
                data: [2000, 2200, 2500, 2700, 3000, 3200],
                borderColor: "#36A2EB",
                fill: false,
            },
            {
                label: "Actual",
                data: [2100, 2300, 2400, 2800, 3100, 3300],
                borderColor: "#FF6384",
                fill: false,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
