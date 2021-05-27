let usuario = document.getElementById('usuario');
let password = document.getElementById('password');


function logar() {
  if (usuario.value == "kelbass" && password.value == "123") {
    localStorage.setItem('Logado', true);

    location.href = "home.html"
  } else {
    alert('Usuário ou senha inválidos!');
  }
}


usuario.addEventListener('focus', () => {
  usuario.style.borderColor = "rgb(55, 28, 80)"
});
password.addEventListener('focus', () => {
  password.style.borderColor = "rgb(55, 28, 80)"
});

usuario.addEventListener('blur', () => {
  usuario.style.borderColor = "#ccc"
});
password.addEventListener('blur', () => {
  password.style.borderColor = "#ccc"
});



  