const apiKey = "3884cc45f65953fb9b1a04a1a46fd433";  // Replace with your actual API key
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let r1 = document.getElementById("r1");
    let r2 = document.getElementById("r2");
    let r3 = document.getElementById("r3");
    let r0 = document.getElementById("r0");

    // Clear previous results
    r1.innerText = "";
    r2.innerText = "";
    r3.innerText = "";

    if (city === "") {
        // Show an error message if no city is entered
        r0.style.display = "block";
        r0.innerHTML = "Please enter the City!";
        return; // Stop execution if city is empty
    } else {
        // Hide the error message if city is entered
        r0.style.display = "none";
    }

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Display fetched weather data
        r1.innerText = `City: ${data.name}`;
        r2.innerText = `Temperature: ${data.main.temp}°C`;
        r3.innerText = `Weather: ${data.weather[0].description}`;
    })
    .catch(error => {
        // Display any errors that occur during the fetch
        r0.style.display = "block";
        r0.innerHTML = `Error fetching data: ${error.message}`;
    });
});