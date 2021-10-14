let url = window.location.origin;
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
      window.location.replace(`${url}`);
    }
  } else {
    window.location.replace(`${url}`);
  }
})();

const changePasswordBtn = document.getElementById("changePasswordBtn");
const logoutBtn = document.getElementById("logoutBtn");
changePasswordBtn.addEventListener("click", () => {
  window.location.replace(`${url}/change-password`);
});
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace(`${url}`);
});
