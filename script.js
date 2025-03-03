const wrapper = document.querySelector(".ota");
const inp = document.querySelector("#input");
const btn = document.querySelector(".btn");

let sorovKeldi = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then(sorov => sorov.json())
  .then(data => {
    sorovKeldi = data;
    renderUser(sorovKeldi);
  });

function renderUser(users) {
  wrapper.innerHTML = ""; 
  users.forEach(objektlar => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h1>Name: ${objektlar.name}</h1>
      <h2>Username: ${objektlar.username}</h2>
      <h5>Address: ${objektlar.address.street}</h5>
      <span>Email: ${objektlar.email}</span>
    `;
    li.className = "li1";
    wrapper.appendChild(li);
  });
}

inp.addEventListener("input", () => {
  const inputQiymati = inp.value.toLowerCase();
  const filter = sorovKeldi.filter(bola => bola.name.toLowerCase().includes(inputQiymati));
  renderUser(filter);
});

btn.addEventListener("click", function () {
    document.body.classList.toggle("addcolor");
    if (document.body.classList.contains("addcolor")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("addcolor");
}