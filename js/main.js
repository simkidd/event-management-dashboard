// Dark Mode Toggle
const toggleDarkMode = document.getElementById("dark-mode-toggle");
const switchIcon = document.getElementById("switchIcon");

// Function to apply dark mode
const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  switchIcon.classList.remove("bi-toggle-off");
  switchIcon.classList.add("bi-toggle-on", "toggle-on");
  localStorage.setItem("darkMode", "enabled"); // Save dark mode state to localStorage
};

// Function to remove dark mode
const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  switchIcon.classList.remove("bi-toggle-on", "toggle-on");
  switchIcon.classList.add("bi-toggle-off");
  localStorage.setItem("darkMode", "disabled"); // Save dark mode state to localStorage
};

// Check localStorage and apply dark mode if enabled
const darkMode = localStorage.getItem("darkMode");

if (darkMode === "enabled") {
  enableDarkMode(); // Enable dark mode on page load if it's set in localStorage
}

if (toggleDarkMode) {
  toggleDarkMode.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
}

// Collapse Sidebar Functionality
const sidebar = document.getElementById("sidebar");
const collapseBtn = document.getElementById("collapseBtn");
const collapseIcon = document.getElementById("collapseIcon");

if (sidebar && collapseBtn) {
  collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");

    // Toggle icon based on the collapsed state
    if (sidebar.classList.contains("collapsed")) {
      collapseIcon.classList.remove("bi-chevron-double-left");
      collapseIcon.classList.add("bi-chevron-double-right");
    } else {
      collapseIcon.classList.remove("bi-chevron-double-right");
      collapseIcon.classList.add("bi-chevron-double-left");
    }
  });
}

// Mobile Menu Button to toggle sidebar
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");

if (mobileMenuBtn && sidebar) {
  mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}
if (closeMenuBtn && sidebar) {
  closeMenuBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}
