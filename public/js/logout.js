const logoutBtn = document.querySelector(".logout");
const loginBtn = document.querySelector(".login");
const signupBtn = document.querySelector(".signup");
const createpostBtn = document.querySelector(".createpost");

// logout function
const logout = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });  
    if (response.ok) document.location.replace("/");
  };

  // login function
  const login = async (event) => {
    event.preventDefault();
    document.location.replace("/login")
  };

  // createpost function
  const createpost = async (event) => {
    event.preventDefault();
    document.location.replace("/api/posts")
  };
  
  // event listeners
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", login);
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", login);
  }

  if (createpostBtn) {
    createpostBtn.addEventListener("click", createpost);
  }