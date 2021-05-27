let btn = document.querySelector('.fa-eye')
let btn2 = document.querySelector('.confirm')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#passowordSingup')
    if (inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  });

  
btn2.addEventListener('click', () => {
    let inputSenhaConfirm = document.querySelector('#passowordSingupConfirm')
    if (inputSenhaConfirm.getAttribute('type') == 'password'){
      inputSenhaConfirm.setAttribute('type', 'text')
    } else {
      inputSenhaConfirm.setAttribute('type', 'password')
    }
  });