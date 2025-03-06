// Simulated Real-time Updates
setInterval(() => {
    document.getElementById("humidity").innerText = `${Math.floor(Math.random() * 10) + 60}%`;
    document.getElementById("temperature").innerText = `${Math.floor(Math.random() * 10) + 25}°C`;
    document.getElementById("water-level").innerText = `${Math.floor(Math.random() * 20) + 70}%`;
}, 5000);

// Toggle Device ON/OFF
function toggleDevice(state) {
    alert(`Device turned ${state ? "ON" : "OFF"}`);
}

// Water Collection Trend Chart
const ctx = document.getElementById("waterChart").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: "Water Collected (Liters)",
            data: [10, 15, 12, 20, 18, 25, 30],
            borderColor: "#00C853",
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
