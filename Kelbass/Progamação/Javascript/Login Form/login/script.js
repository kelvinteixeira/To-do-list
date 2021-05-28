let btn = document.querySelector('.fa-eye');
let usuario = document.getElementById('usuario');
let senha = document.getElementById('password')

// function logar() {
//   if ( usuario == 'kelbass' && senha == '123'){
//     location = '../singup/singup.html'

//   } else {
//     alert('Usuário ou senha incorretos')
//     location = '../home/home.html'
//   }
// }


btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#password');
  if (inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
});




  