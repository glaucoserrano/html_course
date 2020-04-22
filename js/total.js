var $input_quantidade = document.querySelector('#qtd');
var $output_total = document.querySelector('#total');

$input_quantidade.oninput = function() {
    var preco = document.querySelector('#preco').textContent;
    preco= preco.replace("R$","").replace(",",".");
    preco= parseFloat(preco);

    var qtd = $input_quantidade.value;
    var total = qtd*preco;
    total = "R$ " + total;
    total = total.replace(".",",");

    $output_total.value = total;
}