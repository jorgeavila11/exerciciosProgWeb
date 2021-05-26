
function soma() {     
   //pegar o valor de n1
   var n1 = Number(document.getElementById('numero1').value);
   //pegar o valor de n2
   var n2 = Number(document.getElementById('numero2').value);
   //somar os dois numeros
   var somar = n1 + n2;
   //enviamos para a tela resultado
   document.getElementById('result').value = somar; 
   
}



