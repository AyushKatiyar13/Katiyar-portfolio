// script.js
document.addEventListener("DOMContentLoaded", () => {
  // JavaScript for interactive elements

  // Handle theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  let isDarkMode = false;

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      console.log("Button clicked"); // This will help you determine if the event is firing
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        body.classList.add("dark-mode");
        themeToggle.textContent = "Light Mode";
      } else {
        body.classList.remove("dark-mode");
        themeToggle.textContent = "Dark Mode";
      }
    });
  } else {
    console.error('Element with ID "theme-toggle" not found.');
  }

  // Handle form submission

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(this);

      // Debugging: Log form data

      // Convert FormData to JSON
      const jsonData = {};
      formData.forEach((value, key) => {
        jsonData[key] = value;
      });

      console.log("Sending data:", JSON.stringify(jsonData));

      fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          return response.text();
        })
        .then((data) => {
          console.log("Response data:", data);
          alert(data); // Show success or error message
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error sending message");
        });
    });
  } else {
    console.error("Contact form element not found.");
  }
});
