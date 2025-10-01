// Set today’s date
document.getElementById("today-date").textContent = new Date().toDateString();
function showTab(tabId, element) {
  document
    .querySelectorAll(".content")
    .forEach((c) => c.classList.remove("active-content"));
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active-tab"));
  document.getElementById(tabId).classList.add("active-content");
  element.classList.add("active-tab");
}

function endPeriod() {
  alert("Period ended. Next lecturer has been notified.");
  // Replace with AJAX or PHP logic later
}