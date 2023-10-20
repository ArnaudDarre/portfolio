
const body = document.querySelector(".theme-container");
const modeSwitch = document.getElementById('mode-switch');

// Function to toggle between light and dark mode
function toggleMode() {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  updateModeSwitch(isDarkMode);
}

// Check user preference and set the mode accordingly
function setInitialMode() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedMode = localStorage.getItem('darkMode');
  const isDarkMode = savedMode === 'true' || (savedMode === null && prefersDarkMode);

  body.classList.toggle('dark-mode', isDarkMode);
  updateModeSwitch(isDarkMode);
}

// Function to update the mode switch input
function updateModeSwitch(isDarkMode) {
  modeSwitch.checked = isDarkMode;
}

// Add event listener to the mode switch
modeSwitch.addEventListener('change', toggleMode);

// Set the initial mode
setInitialMode();
