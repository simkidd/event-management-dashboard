// Dark Mode Toggle
const toggleDarkMode = document.getElementById("dark-mode-toggle");
const switchIcon = document.getElementById("switchIcon");

if (toggleDarkMode) {
  toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      switchIcon.classList.remove("bi-toggle-off");
      switchIcon.classList.add("bi-toggle-on", "toggle-on");
    } else {
      switchIcon.classList.remove("bi-toggle-on", "toggle-on");
      switchIcon.classList.add("bi-toggle-off");
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
