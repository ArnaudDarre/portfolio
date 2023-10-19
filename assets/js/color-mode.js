const modeSwitch = document.getElementById("mode-switch");
const colorMode = document.getElementById("color-mode");

// Check if the user has a preferred mode stored in localStorage
const userPreferredMode = localStorage.getItem("preferred-mode");

// Function to set the theme based on user preference or system preference
function setTheme() {
  if (userPreferredMode === "dark" || (userPreferredMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    colorMode.href = "/assets/stylesheets/dark-mode.css";
    modeSwitch.checked = true;
  } else {
    colorMode.href = "/assets/stylesheets/light-mode.css";
    modeSwitch.checked = false;
  }
}

// Toggle theme when the switch is clicked
modeSwitch.addEventListener("change", () => {
  if (modeSwitch.checked) {
    console.log('checked');
    colorMode.href = "/assets/stylesheets/dark-mode.css";
    localStorage.setItem("preferred-mode", "dark");
  } else {
    console.log('unchecked');
    colorMode.href = "/assets/stylesheets/light-mode.css";
    localStorage.setItem("preferred-mode", "light");
  }
});

// Initialize the theme
setTheme();
