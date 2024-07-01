document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('table-body');

    // Fetch data from the server
    fetch('http://localhost:3000/save')
        .then(response => response.json())
        .then(data => {
            data.forEach((person, index) => {
                addRowToTable(person, index);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    function addRowToTable(person, index) {
        const row = document.createElement('tr');

        const id = document.createElement('td');
        id.innerHTML = `<p>${index}</p>`;

        const nameCell = document.createElement('td');
        nameCell.innerHTML = `<p>${person.username}</p>`;

        const numberCell = document.createElement('td');
        numberCell.innerHTML = `<p>${person.number}</p>`;

        const emailCell = document.createElement('td');
        emailCell.innerHTML = `<p>${person.email}</p>`;

        const payementCell = document.createElement('td');
        payementCell.innerHTML = `<p>${person.payement} Ar</p>`;

        const dates = document.createElement('td');
        dates.innerHTML = `<p>${person.date}</p>`;

        row.appendChild(id);
        row.appendChild(nameCell);
        row.appendChild(numberCell);
        row.appendChild(emailCell);
        row.appendChild(payementCell);
        row.appendChild(dates);

        tableBody.appendChild(row);
    }
});
