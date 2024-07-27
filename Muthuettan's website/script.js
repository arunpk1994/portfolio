// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    function openTab(tabId) {
        // Hide all tab contents
        const tabContents = document.querySelectorAll(".tab-content");
        tabContents.forEach(tabContent => tabContent.style.display = "none");

        // Show the selected tab content
        document.getElementById(tabId).style.display = "block";
    }

    // Initially hide all tab contents
    openTab("");
});
