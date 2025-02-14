let amigos = []

const userInput = document.getElementById('amigo')
const button = document.querySelector('.button-add')
const listaAmigos = document.getElementById("listaAmigos")
const resultado = document.getElementById("resultado")

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    adicionarAmigo()
  }
})

function listarAmigos() {
  listaAmigos.innerHTML = ''

  amigos.forEach(amigo => {
    const li = document.createElement('li')
    li.textContent = amigo
    listaAmigos.appendChild(li)
  })
}

function adicionarAmigo() {
  const amigo = userInput.value.trim()
  if (amigo.length <= 0) {
    return alert('Por favor, insira um nome')
  } 

  amigos.push(amigo)
  userInput.value = ''
  listarAmigos()
}


function sortearAmigo() {
  if (amigos.length === 0) {
    return alert("Por favor, adicione um amigo")
  }

  const randomIndex = Math.floor(Math.random() * amigos.length)
  const amigoSorteado = amigos[randomIndex]

  resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`
}
