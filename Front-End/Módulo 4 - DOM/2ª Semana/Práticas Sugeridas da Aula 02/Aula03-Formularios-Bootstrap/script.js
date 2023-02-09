(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()


const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");

txtSenha.addEventListener('input', () => validarSenhas());
txtConfSenha.addEventListener('input', () => validarSenhas());

function validarSenhas() {
  if (txtSenha.value != txtConfSenha.value) {
    txtConfSenha.classList.remove("is-valid");
    txtConfSenha.classList.add("is-invalid");
    txtConfSenha.setCustomValidity("As senhas não conferem!");
  } else {
    txtConfSenha.classList.remove("is-invalid");
    txtConfSenha.classList.add("is-valid");
    txtConfSenha.setCustomValidity("");
  }
}
