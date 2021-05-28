let btn = document.querySelector('.fa-eye')
let btnConfirm = document.querySelector('.confirm')

let nome = document.querySelector('#name')
let email = document.querySelector('#email')
let username = document.querySelector('#username')
let passwordSingup = document.querySelector('#passwordSingup')
let passwordSingupConfirm = document.querySelector('#passwordSingupConfirm')

nome.addEventListener('keyup', () => {
  if (nome.value.lenght <= 3) {
    nome.setAttribute('style', 'border-color: red')
    nome.setAttribute('style', 'color: red')
  } else {
    nome.setAttribute('style', 'border-color: green')
  }
})


btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#passwordSingup')
    if (inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  });

  
btnConfirm.addEventListener('click', () => {
    let inputSenhaConfirm = document.querySelector('#passwordSingupConfirm')
    if (inputSenhaConfirm.getAttribute('type') == 'password'){
      inputSenhaConfirm.setAttribute('type', 'text')
    } else {
      inputSenhaConfirm.setAttribute('type', 'password')
    }
  });

  function cadastrar() {
    
  }