// app.js

document.addEventListener("DOMContentLoaded", () => {
    // Bar Chart
    const barChartCtx = document.getElementById("barChart").getContext("2d");
    new Chart(barChartCtx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: "Expenses",
                    data: [1200, 1900, 3000, 2500, 3200, 2700],
                    backgroundColor: "#4CAF50",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });

    // Doughnut Chart
    const doughnutChartCtx = document.getElementById("doughnutChart").getContext("2d");
    new Chart(doughnutChartCtx, {
        type: "doughnut",
        data: {
            labels: ["Transportation", "Bills", "Food", "Shopping", "Entertainment"],
            datasets: [
                {
                    data: [500, 1500, 1200, 800, 400],
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9F40"],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
});
// app.js

document.addEventListener("DOMContentLoaded", () => {
    // Generate the calendar
    const calendar = document.getElementById("calendar");

    const renderCalendar = () => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Days of the week
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Clear the calendar
        calendar.innerHTML = "";

        // Render the days of the week headers
        daysOfWeek.forEach((day) => {
            const dayHeader = document.createElement("div");
            dayHeader.classList.add("header");
            dayHeader.textContent = day;
            calendar.appendChild(dayHeader);
        });

        // Render empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("empty");
            calendar.appendChild(emptyCell);
        }

        // Render the days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement("div");
            dayCell.classList.add("day");
            dayCell.textContent = day;

            // Highlight today
            if (
                day === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
            ) {
                dayCell.classList.add("today");
            }

            calendar.appendChild(dayCell);
        }
    };

    renderCalendar();

    // Bar Chart
    const barChartCtx = document.getElementById("barChart").getContext("2d");
    new Chart(barChartCtx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: "Expenses",
                    data: [1200, 1900, 3000, 2500, 3200, 2700],
                    backgroundColor: "#4CAF50",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });

    // Doughnut Chart
    const doughnutChartCtx = document.getElementById("doughnutChart").getContext("2d");
    new Chart(doughnutChartCtx, {
        type: "doughnut",
        data: {
            labels: ["Transportation", "Bills", "Food", "Shopping", "Entertainment"],
            datasets: [
                {
                    data: [500, 1500, 1200, 800, 400],
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9F40"],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
});
