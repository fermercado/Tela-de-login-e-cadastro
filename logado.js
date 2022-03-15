let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = 'Olá ' + userLogado.name

if (localStorage.getItem('token') == null) {
  alert('Voce precisa estar logado para acessar essa pagina')
  window.location.href = 'index.html'
}

function exit() {
  localStorage.removeItem('token')
  window.location.href = 'index.html'
}
