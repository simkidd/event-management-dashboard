const eventData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
    description: "A summit to discuss cloud innovations and trends.",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
    description: "Conference on the impact of blockchain technology.",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
  },
  {
    name: "AI and Robotics Summit",
    date: "2025-01-22",
    speaker: "Jane Green",
    status: "Completed",
    description: "Discussion on AI and robotics in industry.",
  },
  {
    name: "HealthTech Symposium",
    date: "2025-02-01",
    speaker: "Dr. Leo Tan",
    status: "In Progress",
    description: "Exploring the future of health technology.",
  },
  {
    name: "E-commerce Innovations Forum",
    date: "2025-02-10",
    speaker: "Rachel Stone",
    status: "Completed",
    description: "Forum on the latest trends in e-commerce.",
  },
  {
    name: "AI Trends in 2025",
    date: "2025-02-15",
    speaker: "Prof. Alan Grey",
    status: "In Progress",
    description: "Predicting AI trends for 2025.",
  },
  {
    name: "Sustainable Cities Conference",
    date: "2025-03-05",
    speaker: "John Carter",
    status: "Completed",
    description: "Building sustainable cities for the future.",
  },
  {
    name: "Next-Gen Cybersecurity",
    date: "2025-03-15",
    speaker: "Dr. Sarah Lee",
    status: "Completed",
    description: "Advances in cybersecurity for the digital age.",
  },
  {
    name: "5G and Beyond",
    date: "2025-03-30",
    speaker: "Dr. Laura Brown",
    status: "In Progress",
    description: "Exploring the impact of 5G technology.",
  },
  {
    name: "Tech for Good Summit",
    date: "2025-04-12",
    speaker: "Emma Jones",
    status: "Completed",
    description: "Using technology to drive social good.",
  },
  {
    name: "Smart Devices in IoT",
    date: "2025-04-20",
    speaker: "Mark Evans",
    status: "In Progress",
    description: "Exploring smart devices in the Internet of Things.",
  },
  {
    name: "Digital Marketing Future",
    date: "2025-05-05",
    speaker: "Sophie Turner",
    status: "Completed",
    description: "The future of digital marketing strategies.",
  },
  {
    name: "Big Data in Business",
    date: "2025-05-12",
    speaker: "Lucas White",
    status: "In Progress",
    description: "How big data is transforming business.",
  },
  {
    name: "Green Energy Revolution",
    date: "2025-05-30",
    speaker: "Olivia Nelson",
    status: "Completed",
    description: "Advances in green energy technologies.",
  },
  {
    name: "Tech-Driven Education",
    date: "2025-06-10",
    speaker: "Michael Stevens",
    status: "In Progress",
    description: "Technology's role in the future of education.",
  },
  {
    name: "Virtual Reality Forum",
    date: "2025-06-25",
    speaker: "Laura White",
    status: "Completed",
    description: "Exploring virtual reality in entertainment.",
  },
  {
    name: "Quantum Computing 2025",
    date: "2025-07-05",
    speaker: "Paul Black",
    status: "Completed",
    description: "The future of quantum computing.",
  },
  {
    name: "SpaceTech Expo",
    date: "2025-07-15",
    speaker: "Dr. Robert Brown",
    status: "In Progress",
    description: "Advances in space technology.",
  },
  {
    name: "Women in Tech Summit",
    date: "2025-07-25",
    speaker: "Jessica Davis",
    status: "Completed",
    description: "Celebrating women in technology.",
  },
  {
    name: "Next-Gen AI in 2025",
    date: "2025-08-10",
    speaker: "Dr. Kevin Clark",
    status: "In Progress",
    description: "Discussing the next generation of AI.",
  },
];

let rowsPerPage = 10;
let currentPage = 1;
let filteredData = [...eventData];

// Function to filter and paginate the data
function filterAndPaginate() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const statusFilter = document.getElementById("statusFilter").value;
  const nameFilter = document.getElementById("nameFilter").value;
  const dateFilter = document.getElementById("dateFilter").value;

  // Filter data based on search term, status, name, and date
  filteredData = eventData.filter((event) => {
    const matchesSearchTerm =
      event.name.toLowerCase().includes(searchTerm) ||
      event.date.toLowerCase().includes(searchTerm) ||
      event.speaker.toLowerCase().includes(searchTerm) ||
      event.status.toLowerCase().includes(searchTerm);

    const matchesStatus = statusFilter === "" || event.status === statusFilter;
    const matchesName = nameFilter === "" || event.speaker === nameFilter;
    const matchesDate = dateFilter === "" || event.date.startsWith(dateFilter);

    return matchesSearchTerm && matchesStatus && matchesName && matchesDate;
  });

  // Reset to the first page after filtering
  currentPage = 1;

  // Re-render the table and pagination with filtered data
  paginateTable();
  renderPagination(filteredData.length);
}

function renderTable(data) {
  const tableBody = document.getElementById("eventTableBody");
  const resultCount = document.getElementById("resultCount");

  // Clear previous rows
  tableBody.innerHTML = "";

  if (data.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='4'>No events found</td></tr>"; // Show message when no data
    return;
  }

  data.forEach((event) => {
    const row = document.createElement("tr");
    row.classList.add("event-row");
    row.innerHTML = `
      <td>
       <div class="name-wrap">
          <button class="show-row-btn">
            <i class="bi bi-chevron-down"></i>
          </button>
          <span class="event-name">${event.name}</span>
        </div
      </td>
      <td>${event.date}</td>
      <td>${event.speaker}</td>
      <td><span class="badge ${
        event.status === "Completed" ? "completed" : "in-progress"
      }">
      <i class="bi bi-dot"></i>${event.status}</span></td>
    `;

    // Create the hidden details row
    const detailsRow = document.createElement("tr");
    detailsRow.classList.add("event-details");
    detailsRow.style.display = "none"; // Initially hidden
    detailsRow.innerHTML = `
      <td colspan="4" class="details-bg">
        <div class="show-speaker">
        <span>${event.speaker}</span>
        <span>${event.date}</span>
        </div>
      </td>
    `;

    // Append both rows to the table body
    tableBody.appendChild(row);
    tableBody.appendChild(detailsRow);

    // Add event listener to open modal when clicking on event name
    const eventNameSpan = row.querySelector(".event-name");
    eventNameSpan.addEventListener("click", () => openModal(event));

    // Add event listener to toggle the details row
    const chevronBtn = row.querySelector(".show-row-btn");
    chevronBtn.addEventListener("click", () => {
      if (detailsRow.style.display === "none") {
        detailsRow.style.display = "table-row"; // Show the details row
        row.classList.add("selected-row"); // Highlight selected row
        chevronBtn
          .querySelector("i")
          .classList.replace("bi-chevron-down", "bi-chevron-up");
      } else {
        detailsRow.style.display = "none"; // Hide the details row
        row.classList.remove("selected-row"); // Highlight selected row
        chevronBtn
          .querySelector("i")
          .classList.replace("bi-chevron-up", "bi-chevron-down");
      }
    });

    // Update the displayed count
    resultCount.textContent = data.length;
  });
}

// Modal logic
const modal = document.getElementById("eventModal");
const closeButtons = document.querySelectorAll(".closeModal");

function closeModal() {
  modal.style.display = "none";
}
closeButtons.forEach((btn) => btn.addEventListener("click", closeModal));

function openModal(event) {
  document.getElementById("modalEventName").textContent = event.name;
  document.getElementById("modalEventDate").textContent = event.date;
  document.getElementById("modalEventSpeaker").textContent = event.speaker;
  document.getElementById("modalEventDescription").textContent =
    event.description || "No description available";

  modal.style.display = "block";
}

// Close modal when user clicks outside
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Function to render the pagination controls
function renderPagination(totalRows) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = ""; // Clear pagination

  const totalPages = Math.ceil(totalRows / rowsPerPage);

  // If only one page or no rows, no need to render pagination
  if (totalPages <= 1) return;

  // Add "Prev" button
  const prevButton = document.createElement("span");
  prevButton.innerHTML = `<i class="bi bi-chevron-left"></i>`;
  prevButton.classList.add("prev-next");
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      paginateTable();
      renderPagination(filteredData.length); // Re-render pagination after table update
    }
  });
  prevButton.classList.toggle("disabled", currentPage === 1); // Disable if on first page
  pagination.appendChild(prevButton);

  // Determine which page numbers to show
  let startPage = Math.max(1, currentPage - 1); // Show at least 1 before current
  let endPage = Math.min(totalPages, currentPage + 1); // Show 1 after current

  // Adjust for edge cases: if at the beginning or end of the pages
  if (currentPage === 1) {
    endPage = Math.min(3, totalPages);
  } else if (currentPage === totalPages) {
    startPage = Math.max(1, totalPages - 2);
  }

  // Render page numbers
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("span");
    pageButton.textContent = i;

    // Add active class for the current page
    if (i === currentPage) {
      pageButton.classList.add("active");
    }

    pageButton.addEventListener("click", () => {
      currentPage = i;
      paginateTable();
      renderPagination(filteredData.length); // Rerender pagination after table update
    });

    pagination.appendChild(pageButton);
  }

  const nextButton = document.createElement("span");
  nextButton.innerHTML = `<i class="bi bi-chevron-right"></i>`;
  nextButton.classList.add("prev-next");
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      paginateTable();
      renderPagination(filteredData.length); // Re-render pagination after table update
    }
  });
  nextButton.classList.toggle("disabled", currentPage === totalPages); // Disable if on last page
  pagination.appendChild(nextButton);
}

// Function to paginate and render the table based on the current page
function paginateTable() {
  const start = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(start, start + rowsPerPage);

  // Ensure that if the current page goes beyond the total pages, we reset to the last available page
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  renderTable(paginatedData);
}

// Function to filter the data based on the selected status
function filterData() {
  const statusFilter = document.getElementById("statusFilter").value;
  if (statusFilter === "all") {
    filteredData = [...eventData]; // Reset to all data
  } else {
    filteredData = eventData.filter((event) => event.status === statusFilter);
  }
  currentPage = 1; // Reset to first page when filtering
  paginateTable();
  renderPagination(filteredData.length);
}

// Event listeners for filters and pagination
document.getElementById("rowsPerPage").addEventListener("change", (e) => {
  rowsPerPage = parseInt(e.target.value);
  currentPage = 1;
  paginateTable();
  renderPagination(filteredData.length);
});

document
  .getElementById("searchInput")
  .addEventListener("input", filterAndPaginate);
document
  .getElementById("statusFilter")
  .addEventListener("change", filterAndPaginate);
document
  .getElementById("nameFilter")
  .addEventListener("change", filterAndPaginate);
document
  .getElementById("dateFilter")
  .addEventListener("change", filterAndPaginate);

// Initial render
paginateTable();
renderPagination(eventData.length);
