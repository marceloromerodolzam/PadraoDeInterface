const sumario = document.getElementById('sumario');
const painel = document.getElementById('painel-detalhes');

const pessoaData = [

    {
        name: 'João',
        address: 'Rua A, 124',
        phone: '(55)99123456',
        age: '32',
    }, {
        name: 'Ana',
        address: 'Rua A, 1',
        phone: '(48)986754125',
        age: '21',
    }

];

function mostrarDetalhes(pessoa){

    painel.innerHTML = `
    
        <h2>${pessoa.name}</h2>
        <h4>Endereço: ${pessoa.address}</h4>
        <h4>Telefone: ${pessoa.phone}</h4>
        <h4> idade: ${pessoa.age}</h4>

    `;

}

pessoaData.forEach(pessoa => {

    const listaItem = document.createElement('div');
    listaItem.className = 'itemSumario';
    listaItem.textContent = pessoa.name;

    listaItem.addEventListener('click', function(){

        //atualiza detalhes quando é clicado
        mostrarDetalhes(pessoa);

        //remove a classe 'selected' de todos os itens e adiciiona ao tiem clicado
        const itens = document.querySelector('.itemSumario');
        itens.forEach(item => item.classList.remove('selected'));
        listaItem.classList.add('selected');

    });

    sumario.appendChild(listaItem);

});