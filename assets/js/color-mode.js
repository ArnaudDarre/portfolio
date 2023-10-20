const body = document.querySelector(".theme-container");

// Function to toggle between light and dark mode
function toggleMode() {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
}

// Check user preference and set the mode accordingly
function setInitialMode() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedMode = localStorage.getItem('dark-mode');

  if (savedMode === 'true' || (savedMode === null && prefersDarkMode)) {
    body.classList.add('dark-mode');
  }
}

// Add event listener to the mode switch
document.getElementById('mode-switch').addEventListener('change', toggleMode);

// Set the initial mode
setInitialMode();
