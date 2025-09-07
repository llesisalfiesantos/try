function register() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Redirect to dashboard after "successful" registration
  window.location.href = "dashboard.html";
}

function logout() {
  window.location.href = "register.html";
}
