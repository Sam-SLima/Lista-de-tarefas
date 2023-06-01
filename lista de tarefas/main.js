let ConteudoDaLista = [];

const form = document.getElementById("form-itens");
const inputAdicionarItem = document.getElementById("receber-item");
const botaoAdicionarItem = document.getElementById("botaoAdicionar");
const lista = document.getElementById("listaDeTarefas");
const listaSalvaNaNuvem = localStorage.getItem('ConteudoDaLista');

function AtualizarNuvem() {
    localStorage.setItem('ConteudoDaLista', JSON.stringify(ConteudoDaLista))
}

if(listaSalvaNaNuvem) {
    ConteudoDaLista = JSON.parse(listaSalvaNaNuvem);
    adicionarItem()
} else {
    ConteudoDaLista = [];
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    SalvarItemNaLista()
    adicionarItem()
    inputAdicionarItem.focus()
})

function SalvarItemNaLista() {
    const novoElemento = inputAdicionarItem.value;
    ConteudoDaLista.push({
        valor: novoElemento
    })
    console.log(ConteudoDaLista)

    inputAdicionarItem.value = '';
}

function adicionarItem() {
    lista.innerHTML = '';
    ConteudoDaLista.forEach((elemento, index) =>{
        lista.innerHTML += `      
        <Li class="itemDalista" data-valor="${index}">
            <p class="conteudoDalista">${elemento.valor}</p>
            <button class="botaoDeletarItem" id="botaoDeletarOItem">x</button>
        </Li>`
    })

AtualizarNuvem()

    const deletarItem = document.querySelectorAll("#botaoDeletarOItem");

    deletarItem.forEach(i => {
        i.addEventListener('click', (evento) => {
            valorDeletado = evento.target.parentElement.parentElement.getAttribute('data-valor');
            ConteudoDaLista.splice(valorDeletado,1)
            adicionarItem()
        })
    })

}





