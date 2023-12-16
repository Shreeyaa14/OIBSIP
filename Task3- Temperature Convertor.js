function convertTemperature() {
    // Get user input
    var temperatureInput = document.getElementById('temperature').value;
    var unitInput = document.getElementById('unit').value;

    // Validate input is a number
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Convert temperature
    var convertedTemperature;
    if (unitInput === 'celsius') {
        convertedTemperature = parseFloat(temperatureInput);
    } else if (unitInput === 'fahrenheit') {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
    } else {
        convertedTemperature = parseFloat(temperatureInput) - 273.15;
    }

    document.getElementById('result').innerHTML = convertedTemperature.toFixed(2);
}
