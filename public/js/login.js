let url=window.location.origin;
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
      window.location.replace(`${url}/home`);
    }
    if (result.status === "error") {
      localStorage.removeItem("token");
      window.location.replace(`${url}`);
    }
  }
})();

const form = document.getElementById("login");
form.addEventListener("submit", login);

async function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const result = await fetch("/api/login", {
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
    // console.log("Got the token: ", result.data);
    localStorage.setItem("token", result.data);
    window.location.replace(`${url}/home`);
  } else {
    alert(result.error);
  }
}
