const titulo = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];

button.addEventListener("click", mudarModo);

function mudarModo() {
  mudarClasses();
  mudarTextos();
}

function mudarClasses() {
  titulo.classList.toggle("dark-mode");
  button.classList.toggle("dark-mode");
  footer.classList.toggle('dark-mode')
  body.classList.toggle('dark-mode')
}

function mudarTextos() {
  console.log("mudar texto");
  if (button.classList.contains("dark-mode")) {
    button.innerHTML = "Light Mode";
    titulo.innerHTML = "Dark Mode ON";
    return
  }
  button.innerHTML = "Dark Mode";
  titulo.innerHTML = "Light Mode ON";
}
