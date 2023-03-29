/* algoritimo que calcule o que deve ser pago por um produto, considerando preço normal de etiqueta e a escolha de condição de pagamento*/
/*condição pagamento

debito - 10% desconto
dinheiro ou pix - 15 desconto
2x - preco - etiqueta sem juros
+ 2x preco etiqueta mais 10% juros*/


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

