let valor = document.getElementById('dinheiro')
let res = document.getElementById('res')
let element = document.createElement('section')
let div = document.createElement('div')
let ul = document.createElement('ul')

let valorDeLeite = 5
let troco = 0

let leite = '<img src="css/leite.jpg" height="120" width="120">'
let fieldset = document.createElement('fieldset')
let doces = ['Chiclete Big Big', 'Bala 7 Belo', 'Pirulito Big Big', 'Pé de Moleque']
let preco = [0.15, 0.10, 0.40, 0.70]

element.id = 'div'

function verifica(val){
    if (val == 0){
        return true
    } else {
        return false
    }
}

function perguntar() {
    let num = Number(valor.value);
    res.appendChild(element);
    
    element.innerHTML = '';

    if (verifica(num)) {
        alert('Coloque um número válido');
    } else {
        element.innerHTML = `<p>CLAYTIN: Tio, me vê uma caixa de leite aÍ. Tome aqui R$${num} conto.</p>`
        if (num > valorDeLeite) {
            element.innerHTML += `<p id="valor-maior">TIO: Tome aqui seu leite ${leite}. vai querer mais alguma coisa?</p>`;
            element.innerHTML += '<button onclick="acaoSim()" class="botao">SIM</button> ';
            element.innerHTML += '<button onclick="acaoNao()" class="botao">NÃO</button> ';
            troco = num - valorDeLeite
        } else if (num == valorDeLeite) {
            element.innerHTML += `<p>TIO: Tome aqui seu leite ${leite}.</p>`;
            element.innerHTML += '<p>CLAITYN: Valeu, tio! ';
        } else {
            element.innerHTML += `<p>TIO: Esse valor não é o suficiente para você levar o leite, CLAYTIN.</p>`;
        }
    }
    valor.value = ""
    valor.focus()
}


function acaoSim() {
    element.innerHTML = ''
    fieldset.innerHTML = '<legend>TIO: Escolha o que voce quer levar</legend>'
    fieldset.innerHTML += `<p> TROCO: R$ ${troco.toFixed(2)}`
   
    
    fieldset.id = 'res-produtos'
    
    for (let i = 0; i < doces.length; i++){
        let input = document.createElement('input')
        let label = document.createElement('label')
        
        fieldset.appendChild(input)
        fieldset.appendChild(label)

        label.innerHTML = `${doces[i]} - ` + `R$ ${preco[i].toFixed(2)} <br> `  
        input.value = i
        input.type = 'checkbox'
        
        
        switch (i){
            case 0:
                label.htmlFor = 'chicleteBibBig'
                input.name = 'chicleteBigBig'
                input.id = 'chicleteBibBig'
                input.className = 'itens'
                break;
                
            case 1:
                input.name = 'bala7belo'
                input.id = 'bala7belo'
                label.htmlFor = 'bala7belo'
                input.className = 'itens'
                break;
                
            case 2:
                input.name = 'pirulitoBigBig'
                input.id = 'pirulitoBibBig'
                label.htmlFor = 'pirulitoBibBig'
                input.className = 'itens'
                break;
                    
            case 3:
                input.name = 'peDeMoleke'
                input.id = 'peDeMoleke'
                label.htmlFor = 'peDeMoleke'
                input.className = 'itens'
                break;
                
            default:
                break;
            }
    }
            
    element.appendChild(fieldset)
    element.innerHTML += '<button onclick="checar()" class="botao">Adicionar</button>'
}

function acaoNao() {
    element.innerHTML = "<p>TIO: Beleza então, até mais!</p>"    
}

function checar() {
    let itensInputs = document.querySelectorAll('.itens');
    let algumMarcado = false
    let total = 0
    
    ul.innerHTML = ''
    
    for (let i = 0; i < itensInputs.length; i++) {
        if (itensInputs[i].checked) {
            let valorItem = Number(preco[i].toFixed(2))

            total += valorItem
            algumMarcado = true

            element.appendChild(div)
            div.innerHTML = '<h2>ITENS</h2>'
            div.appendChild(ul)
            ul.innerHTML += `<li>${doces[i]} - R$ ${preco[i].toFixed(2)}</li>`
            div.innerHTML += `<span class="total">Total </span> <span> R$ ${total.toFixed(2)}</span><br>`
            div.innerHTML += '<button onclick="finalizar()" class="botao">Finalizar</button>'
        } 
        //ul.innerHTML += `<li>Leite - R$ ${valorDeLeite}</li>`
    }

      if (!algumMarcado){
        div.innerHTML = ''
        div.innerHTML = '<p>Por favor, marque pelo menos uma opção.</p>';
    } 

    return Number(total.toFixed(2))
}
  
function finalizar () {
    let valorCompra = checar() + valorDeLeite;
    let trocoTotal = troco - checar();

    if(checar() > troco){
        alert('Valor insulficiente para a compra')
    } else{
        element.innerHTML = `<h3>Valor total da compra é de R$ ${valorCompra.toFixed(2)} e o troco é de R$ ${trocoTotal.toFixed(2)}</h3>`
        
    }

}