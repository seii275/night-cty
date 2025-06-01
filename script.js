// In-memory users database (demo only)
const users = [
  { username: "seii", password: "12345", role: "admin" }
];

// Elements
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const modalOverlay = document.getElementById("modalOverlay");

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");

const showSignupLink = document.getElementById("showSignup");
const showLoginLink = document.getElementById("showLogin");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Cards clickable behavior
document.getElementById("discordCard").addEventListener("click", () => {
  window.open("https://discord.gg/YOUR_DISCORD_INVITE", "_blank");
});

document.getElementById("tradeCard").addEventListener("click", () => {
  alert("Trade Board coming soon!");
});

document.getElementById("eventsCard").addEventListener("click", () => {
  alert("Events page coming soon!");
});

document.getElementById("galleryCard").addEventListener("click", () => {
  alert("Gallery Wall coming soon!");
});

document.getElementById("leaderboardCard").addEventListener("click", () => {
  alert("Monthly Leaderboard coming soon!");
});

document.getElementById("profilesCard").addEventListener("click", () => {
  alert("Player Profiles coming soon!");
});

document.getElementById("plantCard").addEventListener("click", () => {
  alert("Plant of the Week coming soon!");
});

// Show modals
loginBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
  loginModal.style.display = "block";
  signupModal.style.display = "none";
});

signupBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
  signupModal.style.display = "block";
  loginModal.style.display = "none";
});

// Close modals
closeLogin.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

closeSignup.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

// Switch between login and signup modals
showSignupLink.addEventListener("click", () => {
  loginModal.style.display = "none";
  signupModal.style.display = "block";
});

showLoginLink.addEventListener("click", () => {
  signupModal.style.display = "none";
  loginModal.style.display = "block";
});

// Handle login form submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("loginUser").value.trim();
  const password = document.getElementById("loginPass").value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert("Login successful! Welcome " + username);

    if (user.role === "admin") {
      alert("Redirecting to admin panel...");
      // For demo: open admin panel in new tab (or implement panel here)
      window.open("admin.html", "_blank");
    } else {
      alert("Redirecting to homepage...");
      // Reload or do other action for normal user
      modalOverlay.classList.add("hidden");
    }
  } else {
    alert("Invalid username or password.");
  }
});

// Handle signup form submit
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("signupUser").value.trim();
  const password = document.getElementById("signupPass").value;

  if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
    alert("Username already exists, please choose another.");
    return;
  }

  users.push({ username, password, role: "user" });
  alert("Registration successful! You can now log in.");
  signupModal.style.display = "none";
  loginModal.style.display = "block";
});