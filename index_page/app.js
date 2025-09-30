function navigate(id) {
  document.querySelectorAll(".main-container").forEach((div) => {
    div.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

function checkAdminLogin() {
  const password = document.getElementById("adminPass").value.trim();
  if (password === "Admin1234") {
    window.location.href = "admin_dashboard.html";
  } else {
    alert("Incorrect password. Please try again.");
  }
}
function checkTeacherLogin() {
  const name = document.getElementById("uname").value.trim();
  const password = document.getElementById("pwd").value.trim();
  if (name === document.getElementById("teacherName").value.trim()) {
    if (password === document.getElementById("teacherPass").value.trim()) {
      alert(`Welcome ${name} Sir, You are successfully logged in.`);
      window.location.href = "teacher_dashboard.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  } else {
    alert(`${name} Sir, You are not registered. Please sign up first.`);
  }
}
function checkTeacherSignup() {
  const name = document.getElementById("teacherName").value.trim();
  const password = document.getElementById("teacherPass").value.trim();
  if (password === document.getElementById("teacherConformPass").value.trim()) {
    alert(`Welcome ${name} Sir, You are successfully signed up`);
    window.location.href = "teacher_dashboard.html";
  } else {
    alert("Incorrect password. Please try again.");
  }
}
