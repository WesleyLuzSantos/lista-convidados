let convidados = []

function adicionar() {
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value
    convidados.push({nome, idade, email})
    atualizarLista()
}

function atualizarLista(){
    let lista = document.getElementById("lista")
    lista.innerHTML = ""
    for(i = 0; i <convidados.length; i++) {
        lista.innerHTML += `
        <div>
            <span>${convidados[i].nome}</span>
        </div>`
    }
}
