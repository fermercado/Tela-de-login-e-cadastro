function btnEye() {
  let btnEye = document.querySelector('.fa-eye')
  btnEye.addEventListener('click', () => {
    let inputPassword = document.querySelector('#password')

    if (inputPassword.getAttribute('type') == 'password') {
      inputPassword.setAttribute('type', 'text')
    } else {
      inputPassword.setAttribute('type', 'password')
    }
  })
}
btnEye()

function access() {
  let inputUser = document.querySelector('#user')
  let labelUser = document.querySelector('#labelUser')

  let inputPassword = document.querySelector('#password')
  let labelPassword = document.querySelector('#labelPassword')

  let msgError = document.querySelector('#msgError')
  let userList = []

  let userValid = {
    name: '',
    user: '',
    password: ''
  }

  userList = JSON.parse(localStorage.getItem('userList'))

  userList.forEach(item => {
    if (inputUser.value == item.user && inputPassword.value == item.password) {
      userValid = {
        name: item.name,
        user: item.user,
        password: item.password
      }
    }
  })

  if (
    inputUser.value == userValid.user &&
    inputPassword.value == userValid.password
  ) {
    window.location.href = 'logado.html'
    let token = Math.random().toString(16).substring(2)
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    labelUser.setAttribute('style', 'color: red')
    user.setAttribute('style', 'border-color: red')
    labelPassword.setAttribute('style', 'color: red')
    password.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuario ou senha invalida'
    user.focus()
  }
}
