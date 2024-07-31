// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggle = document.getElementById("theme-toggle");
//     console.log('themeToggle:', themeToggle); // Log to see if the element is found

//     if (themeToggle) {
//         const body = document.body;
//         let isDarkMode = false;

//         themeToggle.addEventListener("click", () => {
//             console.log("Button clicked");
//             isDarkMode = !isDarkMode;
//             if (isDarkMode) {
//                 body.classList.add("dark-mode");
//                 themeToggle.textContent = "Light Mode";
//             } else {
//                 body.classList.remove("dark-mode");
//                 themeToggle.textContent = "Dark Mode";
//             }
//         });
//     } else {
//         console.error('Element with ID "theme-toggle" not found.');
//     }
// });
