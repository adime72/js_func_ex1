/*function funcCalc(){
    document.getElementById("firstNum").;
    document.getElementById("secondNum")=num2;

console.log(firstNum,secondNum);
}*/

    
$(document).ready(function() {
    $("#btnCalc").click(function() {
      // Reading the data from the form
      var num1 = parseInt($("#num1").val());
      var num2 = parseInt($("#num2").val());
  
      var bigger = calcBigger(num1, num2);
  
      // Deal with the output
      alert(bigger);
    });
});

// Logic function
function calcBigger(nm1, nm2) {
    if (nm1 >= nm2) {
      return nm1;
    } else {
      return nm2;
    }
  }