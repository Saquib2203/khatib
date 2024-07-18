document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get form data
    let formData = new FormData(event.target);
    
    // Example: Send form data to backend (not implemented here)
    console.log("Form submitted with data:", formData);
    
    // Simulate successful booking (replace with actual backend integration)
    alert("Appointment booked successfully!");
    
    // Reset form fields
    event.target.reset();
});
