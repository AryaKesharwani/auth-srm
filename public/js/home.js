(async () => {
  if (localStorage.getItem("token")) {
    const result = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    }).then((res) => res.json());
    if (result.status === "error") {
      localStorage.removeItem("token");
      window.location.replace("http://localhost:3000/");
    }
  } else {
    window.location.replace("http://localhost:3000/");
  }
})();

const changePasswordBtn = document.getElementById("changePasswordBtn");
const logoutBtn = document.getElementById("logoutBtn");
changePasswordBtn.addEventListener("click", () => {
  window.location.replace("http://localhost:3000/change-password");
});
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace("http://localhost:3000/");
});
