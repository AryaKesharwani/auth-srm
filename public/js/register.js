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
    if (result.status === "ok") {
      window.location.replace("http://localhost:3000/home");
    }
    if (result.status === "error") {
      localStorage.removeItem("token");
      window.location.replace("http://localhost:3000/");
    }
  }
})();

const form = document.getElementById("reg-form");
form.addEventListener("submit", registerUser);

async function registerUser(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const result = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());
  if (result.status === "ok") {
    alert("success");
  } else {
    alert(result.error);
  }
}
