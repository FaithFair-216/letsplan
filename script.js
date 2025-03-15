// Function to navigate to a new page based on selection
function navigateTo(option) {
    alert(`Navigating to ${option} planning page...`);
    // You can later replace this with actual navigation
    // window.location.href = `/${option}.html`; 
  }
  // Function to handle reservation
  function makeReservation() {
    alert('Redirecting to reservation page...');
    // Later, redirect to an actual reservation form page
  }
  
  // Optional: Implement search functionality
  document.getElementById('search').addEventListener('input', function (event) {
    const searchQuery = event.target.value.toLowerCase();
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    restaurantCards.forEach(card => {
      const restaurantName = card.querySelector('h3').textContent.toLowerCase();
      if (restaurantName.includes(searchQuery)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  // Function to handle reservation or ticket booking
  function makeReservation() {
    alert('Redirecting to the reservation page...');
    // Redirect logic for reservation or booking page goes here
  }
  
  // Search functionality for restaurant listings
  document.querySelectorAll('[id^="search"]').forEach(input => {
    input.addEventListener('input', function (event) {
      const searchQuery = event.target.value.toLowerCase();
      const restaurantCards = event.target.closest('.restaurant-listings').querySelectorAll('.restaurant-card');
      restaurantCards.forEach(card => {
        const restaurantName = card.querySelector('h3').textContent.toLowerCase();
        if (restaurantName.includes(searchQuery)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const restaurantName = document.getElementById('restaurantName').value;
    const reservationDate = document.getElementById('reservationDate').value;
    const reservationTime = document.getElementById('reservationTime').value;
    const customerName = document.getElementById('customerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const specialInstructions = document.getElementById('specialInstructions').value;
  
    // Basic validation
    if (!reservationDate || !reservationTime || !customerName || !phoneNumber || !emailAddress) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Confirmation message (you can replace this with a backend request to store data)
    document.getElementById('confirmationMessage').style.display = 'block';
  
    // Clear form
    document.getElementById('reservationForm').reset();
  });
  
  