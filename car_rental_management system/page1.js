document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const carName = document.getElementById('carName').value;
    const date = document.getElementById('date').value;
    const distance = document.getElementById('distance').value;

    const carInfo = `Car Name: ${carName}<br>Date: ${date}<br>Distance: ${distance} km`;

    document.getElementById('carInfo').innerHTML = carInfo;

    // Show the popup
    const popup = document.getElementById('popup');
    popup.style.display = "block";

    // Close the popup when the user clicks on the close button
    document.querySelector('.close-btn').onclick = function() {
        popup.style.display = "none";
    }

    // Close the popup when the user clicks outside of the popup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});
