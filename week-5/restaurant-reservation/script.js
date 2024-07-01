/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Hayat Soma
  Date: 6/30/2024
  Filename:
*/

// In-memory table objects
let tables = [
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 6, isReserved: false },
  { tableNumber: 3, capacity: 2, isReserved: false },
  { tableNumber: 4, capacity: 8, isReserved: false },
];

// Function to reserve a table
function reserveTable(tableNumber, callback, time) {
  // Find the table in the tables array
  let table = tables.find(table => table.tableNumber === tableNumber);

  // If table is found and not reserved, reserve it
  if (table && !table.isReserved) {
    table.isReserved = true;
    setTimeout(() => {
      callback(`Table ${tableNumber} successfully reserved for ${time / 1000} seconds.`);
    }, time);
  } else {
    callback(`Error: Table ${tableNumber} is either already reserved or does not exist.`);
  }
}

// Event listener for form submission
document.getElementById('reservationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve input values
  const name = document.getElementById('name').value;
  const tableNumber = parseInt(document.getElementById('tableNumber').value);

  // Clear previous messages
  document.getElementById('message').textContent = '';

  // Function to update message on the webpage
  function updateMessage(msg) {
    document.getElementById('message').textContent = msg;
  }

  // Call reserveTable function
  reserveTable(tableNumber, updateMessage, 3000); // Example time: 3000 ms = 3 seconds
});

