const login = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const name = document.querySelector("#name-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // If the name and password fields aren't empty, post the user to the login route
  if (name && password) {
      const response = await fetch("/api/users/login", {
          method: "POST",
          body: JSON.stringify({ name, password }),
          headers: { "Content-Type": "application/json" },
      });
// If the response is ok, redirect to the dashboard
      if (response.ok) {
          document.location.replace("/dashboard");
      } else {
          alert(name +" could not log in");
      }
  }
};
// Signup function
const signup = async (event) => {
  event.preventDefault();
// Collect values from the signup form
  const name = document.querySelector("#name-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
// If the name and password fields aren't empty, post the user to the signup route
  if (name && password) {
      const response = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify({ name, password }),
          headers: { "Content-Type": "application/json" },
      });
 // If the response is ok, redirect to the dashboard     
      if (response.ok) {
          document.location.replace("/");
      } else {
          alert("Error creating user");
      }
  }
};
// Event listeners
document.querySelector(".login-form").addEventListener("submit", login);
document.querySelector(".signup-form").addEventListener("submit", signup);