function visitante(){
    var visitante = document.getElementById('nomevisitante').value;
    document.getElementById("nome").innerHTML = (visitante);
}

function Acao(op){
    var y = parseInt(document.getElementById("numero").innerHTML);

    var x = parseInt(document.getElementById("numero2").innerHTML);
    

    switch (op) {
        case '+':
            
           document.getElementById("numero").innerHTML = (y+1);

            break;
        
        case '-':

            if (y > 1) {
                document.getElementById("numero").innerHTML = (y-1);
            }
            
            break;
        case '++':
            
            document.getElementById("numero2").innerHTML = (x+1);
     
             break;
             
         case '--':
     
             if (x > 1) {
                document.getElementById("numero2").innerHTML = (x-1);
            }
                 
            break;

        default:
            break;
    }
}

function Valor(op){
    var y = parseInt(document.getElementById("numero").innerHTML);
    var x = parseFloat(document.getElementById("valor1").innerHTML);

    var yy = parseInt(document.getElementById("numero2").innerHTML);
    var xx = parseFloat(document.getElementById("valor2").innerHTML);

    switch (op) {
        case '+':
        
            document.getElementById("valor1").innerHTML = (12.5*y);

            break;
        
        case '-':
            if(x > 1){
                document.getElementById("valor1").innerHTML = (x-12.5);
            }
            break;

        case '++':
            
            document.getElementById("valor2").innerHTML = (13.0*yy);

            break;
        
        case '--':
            if (xx > 1) {
                document.getElementById("valor2").innerHTML = (xx-13.0);
            }
            break;
        default:
            break;
    }
}

function FinalizarCompra(){
    
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    var numero1 = parseFloat(document.getElementById("numero").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    if (valor1 != 0 && valor2 != 0 && numero1 != 0 && numero2 != 0) {
        document.getElementById("valor1").innerHTML = "";
        document.getElementById("valor2").innerHTML = "";
        document.getElementById("numero").innerHTML = "1";
        document.getElementById("numero2").innerHTML = "1";
        
        document.getElementById('nomevisitante').value;
        document.getElementById("nome").innerHTML = ("Visitante");

        alert('Obrigado pela preferência');
    }

}

function AdicionarExcluir(op) {
    if (op == 'excluir1') {
        let pai=document.getElementById("itens");
        let filho=document.getElementById("item1");

        pai.removeChild(filho);

        let para = document.createElement('h3');
        para.setAttribute("id", "aviso");
        para.innerHTML = "Item removido";
        para.onclick = function () {
            alert("O item foi removido!");
        }

        pai.appendChild(para);

    }else if(op == 'excluir2'){
        let pai2=document.getElementById("itens2");
        let filho2=document.getElementById("item2");
        pai2.removeChild(filho2);

        let para2 = document.createElement('h3');
        para2.setAttribute("id", "aviso");
        para2.innerHTML = "Item removido";
        para2.onclick = function () {
            alert("O item foi removido!");
        }

        pai2.appendChild(para2);
    }
}
