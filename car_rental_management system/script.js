
    cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.innerHTML = `<h3>${car.name}</h3><p>${car.description}</p>`;
        carList.appendChild(carDiv);
    });

    const form = document.getElementById('submit_form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;

        alert(`Booking confirmed for ${name}. Details:\nEmail: ${email}\nCar: ${car}\nDate: ${date}
        THANKS FOR CHOSING OUR WEBSITE`);
    });