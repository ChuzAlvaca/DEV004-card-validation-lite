// eslint-disable-next-line no-unused-vars
function validate() {
 arrOfDigits = Array.from(String((document.getElementById ("cardnumber").value)), Number);
// convierte el valor del input string en un array.
Console.log(arrOfDigits);
    arrOfDigits.reverse();
    // invierte los valores del array
    console.log(arrOfDigits);
    // vamos a multiplicar los valores de las posiciones pares por dos.
    // for recorre el array.
    var pares = []; 
    //arreys vacios para que contengan los valores de las posiciones pares e impares.
    var impares = [];
    //si después de lenght no pongo nada, hay un problema con la posición 0 en el console.log.
    //si pongo +1 me da un valor indefinido en los inpares que aparentemente no afecta, por ello lo dejé asi. 
    for (i = 0; i < arrOfDigits.length+1; i++) {
    // i de index es una constante, indica posición iniciamos en 0 y 
    //terminamos en la longitud del array mas 1. 
    // i++ indica que va a revisar los elementos del array en un giro, antes se decia 1 +1.
    console.log('hola',i, arrOfDigits[i]);
      
      if (i % 2 ==0){
      //metodo para identificar posiciones par con %
        pares.push(arrOfDigits[i]);
      }
      else {
        impares.push(arrOfDigits[i]);
       //empuja los valores al array vacio. 
        console.log(pares);
        console.log(impares);
     }
     
     
    
     }
     
    }
    
     //necesitamos otro for para tratar el array de impares. 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
    
    
    
         
          // if (valid) {
            
          // }
          // else {
            // Show error message in div#result
          
        
    
        function isValid(creditCardNumber){
          var creditCardNumber= (document.getElementById ("cardnumber").value);
          if (isNaN (creditCardNumber)){
            return alert ("Escribe un número válido");
          }
          if(creditCardNumber==""){
                alert("El campo está vacío. Escribe un número válido");
            }
          
        } 