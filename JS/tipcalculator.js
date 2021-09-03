function calculateTip(){
     var subtotal= Number( document.getElementById("subtotal").value);
     var tip = Number(  document.getElementById("tip").value);
     var total = subtotal + (subtotal * (tip/100));
     document.getElementById("result").innerHTML = "$ "+ total;
  
//   alert(total);
}