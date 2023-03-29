
/*
function calJuros (){
    const produtoEtiqueta = 100;
    let condicao = 1;


    if (condicao === 1) {
   
        console.log(produtoEtiqueta - (produtoEtiqueta * 0.1));
    
    } else if (condicao === 2) {
       
      
        console.log(produtoEtiqueta - (produtoEtiqueta * 0.15));
    
    } else if (condicao === 3) {
       
        console.log(produtoEtiqueta);
    
    
    } else
    
        console.log(produtoEtiqueta + (produtoEtiqueta * 0.1));
}


calJuros();
*/

function aplicarDesconto (valor, desconto){

    return (valor - (valor *(desconto /100))); 
  
}


function aplicarJuros (valor, juros) {

    return (valor + (valor *(juros /100)));
}

(function main() {
const produtoEtiqueta = 100;
let condicaoPagamento = 4;


if (condicaoPagamento === 1) {
   
    console.log(aplicarDesconto(produtoEtiqueta, 10));

} else if (condicaoPagamento === 2) {
   
  
    console.log(aplicarDesconto(produtoEtiqueta, 15));

} else if (condicaoPagamento === 3) {
   
    console.log(produtoEtiqueta);

} else console.log(aplicarJuros(produtoEtiqueta, 10));



})();
   
    

       







