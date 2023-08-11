document.addEventListener("DOMContentLoaded", function() {
  // Select all reservation form buttons
  const showReservationFormButtons = document.querySelectorAll("#showReservationForm");
  const reservationForm = document.querySelector(".reservation-form");
  const thankYouMessage = document.querySelector("#thank-you-message"); // Get the thank you message element
  
  // Attach click event to each reservation form button
  showReservationFormButtons.forEach(button => {
    button.addEventListener("click", function() {
      reservationForm.style.display = "flex"; // Display the form
      
      document.body.style.overflow = "hidden"; // Hide the body overflow
      thankYouMessage.style.display = "none"; // Hide the thank you message when form is shown
    });
  });

  // Close form button
  const closeFormButton = document.querySelector(".close-form");
  
  closeFormButton.addEventListener("click", function() {
    reservationForm.style.display = "none"; // Hide the form
    document.body.style.overflow = "auto"; // Restore body overflow
  });
  
  const reservationFormSubmitButton = document.querySelector(".reservation-form button[type='submit']");
  reservationFormSubmitButton.addEventListener("click", function() {
    // Show the thank you message when the form is submitted
    thankYouMessage.style.display = "block";
  });

  // Scroll to Gallery Section
  const galleryLink = document.querySelector("#showGallery"); // Link to Gallery section
  const gallerySection = document.querySelector(".gallery");

  galleryLink.addEventListener("click", function(e) {
    e.preventDefault();
    gallerySection.scrollIntoView({ behavior: "smooth" });
  });

  // Rotating Photo Effect
  const galleryImages = document.querySelector(".gallery-images");

  const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg"
    // Add more photo filenames as needed
  ];

  let currentPhotoIndex = 0;

  function rotateGallery() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    const newPhotoSrc = `images/${photos[currentPhotoIndex]}`;
    galleryImages.style.backgroundImage = `url(${newPhotoSrc})`;
  }

  setInterval(rotateGallery, 3000); // Change photo every 3 seconds
});
