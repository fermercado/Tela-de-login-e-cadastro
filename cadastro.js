function btnPassword() {
  let btnEye = document.querySelector('#btnPassword')
  btnEye.addEventListener('click', () => {
    let inputPassword = document.querySelector('#password')

    if (inputPassword.getAttribute('type') == 'password') {
      inputPassword.setAttribute('type', 'text')
    } else {
      inputPassword.setAttribute('type', 'password')
    }
  })
}
btnPassword()

function btnConfirmPassword() {
  let btnEye = document.querySelector('#btnConfirmPassword')
  btnEye.addEventListener('click', () => {
    let inputPassword = document.querySelector('#confirmPassword')

    if (inputPassword.getAttribute('type') == 'password') {
      inputPassword.setAttribute('type', 'text')
    } else {
      inputPassword.setAttribute('type', 'password')
    }
  })
}
btnConfirmPassword()

let inputName = document.querySelector('#name')
let labelName = document.querySelector('#labelName')
let validName = false

let inputUser = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let inputPassword = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let inputConfirmPassword = document.querySelector('#confirmPassword')
let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
let validConfirmUser = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

inputName.addEventListener('keyup', () => {
  if (inputName.value.length <= 2) {
    labelName.setAttribute('style', 'color: red')
    labelName.innerHTML = 'Nome * Insira no minimo 3 caracteres'
    inputName.setAttribute('style', 'border-color: red')
    validName = false
  } else {
    labelName.setAttribute('style', 'color: green')
    labelName.innerHTML = 'Nome'
    inputName.setAttribute('style', 'border-color: green')
    validName = true
  }
})

inputUser.addEventListener('keyup', () => {
  if (inputUser.value.length <= 5) {
    labelUser.setAttribute('style', 'color: red')
    labelUser.innerHTML = 'Usuario * Insira no minimo 6 caracteres'
    inputUser.setAttribute('style', 'border-color: red')
    validUser = false
  } else {
    labelUser.setAttribute('style', 'color: green')
    labelUser.innerHTML = 'Usuario'
    inputUser.setAttribute('style', 'border-color: green')
    validUser = true
  }
})

inputPassword.addEventListener('keyup', () => {
  if (inputPassword.value.length <= 5) {
    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = 'Senha * Insira no minimo 6 caracteres'
    inputPassword.setAttribute('style', 'border-color: red')
    validPassword = false
  } else {
    labelPassword.setAttribute('style', 'color: green')
    labelPassword.innerHTML = 'Senha'
    inputPassword.setAttribute('style', 'border-color: green')
    validPassword = true
  }
})

inputConfirmPassword.addEventListener('keyup', () => {
  if (inputPassword.value != inputConfirmPassword.value) {
    labelConfirmPassword.setAttribute('style', 'color: red')
    labelConfirmPassword.innerHTML = 'Confirmar Senha * Senhas nao confere'
    inputConfirmPassword.setAttribute('style', 'border-color: red')
    validConfirmUser = false
  } else {
    labelConfirmPassword.setAttribute('style', 'color: green')
    labelConfirmPassword.innerHTML = 'Confirmar Senha'
    inputConfirmPassword.setAttribute('style', 'border-color: green')
    validConfirmUser = true
  }
})

function cadastrar() {
  let inputName = document.querySelector('#name')
  if (validName && validUser && validPassword && validConfirmUser) {
    let = userList = JSON.parse(localStorage.getItem('userList') || '[]')

    userList.push({
      name: inputName.value,
      user: inputUser.value,
      password: inputPassword.value
    })

    localStorage.setItem('userList', JSON.stringify(userList))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong> Cadastrado com sucesso...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(() => {
      window.location.href = 'index.html'
    }, 1000)
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML =
      '<strong>Preencha todos os campos corretamente</strong>'
    msgSuccess.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = ''
  }
}
