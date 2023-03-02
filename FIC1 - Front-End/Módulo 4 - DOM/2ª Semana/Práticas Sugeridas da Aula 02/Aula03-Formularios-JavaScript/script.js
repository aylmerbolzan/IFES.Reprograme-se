const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");

txtConfSenha.addEventListener("input", (event) => {
  if (txtSenha.value != txtConfSenha.value) {
    txtConfSenha.setCustomValidity("As senhas não conferem!");
    txtConfSenha.reportValidity();
  } else {
    txtConfSenha.setCustomValidity("");
  }
});