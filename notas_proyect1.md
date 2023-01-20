#notas personales by Chuz.
// function isValid(creditCardNumber){
// var creditCardNumber= (document.getElementById ("cardnumber").value);
// if (isNaN (creditCardNumber)){
// return alert ("Escribe un número válido");
// }
// if(creditCardNumber==""){
// return alert("El campo está vacío. Escribe un número válido");	
// }
// }
4213166172799193





// if (j>=9){
    //   substring = j.toString().split('').map(Number);
      //console.log(substring);
    
      //variable de iniciacion, empieza en 0 y va a ir sumando los digitos del array
      //suma los elementos de un array
//       k = 0
//         substring.forEach(function(numero2, _) {
//           k = k + numero2;
//         });
//       arrOfDigits[index] = k
//       console.log(k, "valor");
//     }
//   }
// });

// console.log ('Array final:',arrOfDigits);

// k = 0
// arrOfDigits.forEach(function(numero, _) {
//   k = k + numero;
// });

// console.log('Numero final:', k);
// console.log('modulo 10 de',k, '=', k % 10);
// if (k % 10 == 0) {
//   console.log('Tarjeta Valida');
// }
// else {
//   console.log('Tarjeta Invalida!');
// }





<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Tarjeta de crédito válida</title>
</head>

<body>
  <input id="cardnumber"></input>
  <button onclick="validate()">Validar</button>
  <div id="result"></div>
  
 <script lang="javascript">
  
function validate(){
const arrOfDigits = Array.from(String((document.getElementById ("cardnumber").value)), Number);
console.log('Array Original:',arrOfDigits);
arrOfDigits.reverse();
console.log('Array invertido:',arrOfDigits);
let NewArrPar =[];
let NewArrIn =[];
arrOfDigits.forEach(function(numero,index) {
if (index %2 !== 0) {
  NewArrPar.push(numero);
  console.log (NewArrPar);
}
})
}














</script>
</body>

</html>