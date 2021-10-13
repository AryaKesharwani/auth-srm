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

const form = document.getElementById("reg-form");
form.addEventListener("submit", registerUser);

async function registerUser(event) {
  event.preventDefault();
  const password = document.getElementById("password").value;

  const result = await fetch("/api/change-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newPassword: password,
      token: localStorage.getItem("token"),
    }),
  }).then((res) => res.json());

  if (result.status === "ok") {
    alert("Password Changed");
  } else {
    alert(result.error);
  }
}
