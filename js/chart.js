// Chart.js Initialization
const chartElement = document.getElementById("eventChart");

if (chartElement && typeof Chart !== "undefined") {
  const ctx = chartElement.getContext("2d");

  const eventChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Event Registrations",
          data: [700, 950, 850, 400, 1000, 550, 840, 450, 820, 630, 960, 600],
          backgroundColor: "#8576ff",
          borderColor: "#8576ff",
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 1000, // Sets a maximum value for Y-axis
          ticks: {
            stepSize: 200, // Defines the intervals for ticks on Y-axis
          },
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false, // hides the label
        },
      },
    },
  });
}
