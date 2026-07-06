document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});

function fetchData() {
    // Assuming you have an API endpoint that returns JSON data
    fetch('https://example.com/api/data')
    .then(response => response.json())
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    
    // Clear existing data
    dataContainer.innerHTML = '';

    // Iterate over the data and create HTML elements to display it
    data.forEach(item => {
        const dataItem = document.createElement('div');
        dataItem.classList.add('data-item');
        // dataItem.textContent = `ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`;
        dataItem.textContent = `Id: ${item.Id}, Date: ${item.Date}, DoorTime: ${item.DoorTime}, StartTime: ${item.StartTime}, Tickets: ${item.Tickets}, VenueId: ${item.VenueId}`;
        dataContainer.appendChild(dataItem);
    });
}
