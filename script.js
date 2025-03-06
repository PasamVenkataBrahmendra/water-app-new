document.addEventListener("DOMContentLoaded", () => {
    let humidity = 65;
    let temperature = 28;
    let waterLevel = 75;

    function updateDashboard() {
        document.getElementById("humidity").textContent = `${humidity}%`;
        document.getElementById("temperature").textContent = `${temperature}°C`;
        document.getElementById("water-level").textContent = `${waterLevel}%`;
    }

    function simulateSensorUpdates() {
        setInterval(() => {
            humidity = Math.floor(Math.random() * (80 - 60 + 1) + 60);
            temperature = Math.floor(Math.random() * (35 - 25 + 1) + 25);
            waterLevel = Math.floor(Math.random() * (90 - 70 + 1) + 70);
            updateDashboard();
        }, 5000);
    }

    function toggleDevice(isOn) {
        let status = isOn ? "ON" : "OFF";
        alert(`AWH Device turned ${status}`);
    }

    updateDashboard();
    simulateSensorUpdates();
});
