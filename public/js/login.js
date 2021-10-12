const form = document.getElementById("login");
form.addEventListener("submit", login);

if (localStorage.getItem("token")) {
  window.location.replace("http://localhost:3000/home");
}
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
    window.location.replace("http://localhost:3000/home");
    redi;
  } else {
    alert(result.error);
  }
}
