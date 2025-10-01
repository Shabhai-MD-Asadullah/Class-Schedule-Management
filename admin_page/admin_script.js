const addPeriodForm = document.getElementById("addPeriodForm");
const table = document.getElementsByTagName("tbody");

function createTableRow(teacher, branch, subject, startTime, endTime) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${teacher}</td>
    <td>${branch}</td>
    <td>${subject}</td>
    <td>${startTime} - ${endTime}</td>   
    <td><button class="btn btn-danger btn-sm">Delete</button></td>
  `;
  return tr;
}

addPeriodForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(addPeriodForm);

  const startTime = formData.get("startTime"); // e.g. "10:30"
  const startPeriod = formData.get("startPeriod"); // "AM" or "PM"
  const endTime = formData.get("endTime");
  const endPeriod = formData.get("endPeriod");

  // Combine for display
  const formattedStartTime = `${startTime} ${startPeriod}`;
  const formattedEndTime = `${endTime} ${endPeriod}`;
  const newRow = createTableRow(
    formData.get("teacher"),
    formData.get("branch"),
    formData.get("subject"),
    formattedStartTime,
    formattedEndTime
  );
  table[0].appendChild(newRow);
  addPeriodForm.reset();
});

// Use event delegation for delete buttons
document.getElementById("scheduleTableBody").addEventListener("click", function(e) {
  if (e.target.classList.contains("btn-danger")) {
    e.target.closest("tr").remove();
  }
});