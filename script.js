var displayvalue = document.getElementById("input");
function display(val){
    displayvalue.value += val;
    console.log(displayvalue.value);
}
var btn=document.getElementById('bt');
btn.onclick=function(){
    console.log(displayvalue.value);
    displayvalue.value="";
}
function calculate(){
    var value=displayvalue.value;
    displayvalue.value=eval(value);
}